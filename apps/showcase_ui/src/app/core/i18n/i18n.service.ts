/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Injectable, signal } from '@angular/core';

import { ZH_DICT } from './dict';

/** Supported UI languages. The English source text is used as the key. */
export type Lang = 'zh' | 'en';

const LANG_STORAGE_KEY = 'artemis.ui.lang';

/**
 * Runtime i18n service. Strings are keyed by their English source text:
 * - 'en' echoes the key back (optionally interpolating `{param}` placeholders)
 * - 'zh' looks the key up in the zh-CN dictionary and falls back to the key
 *   when no translation exists, so an untranslated string still renders.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(I18nService.initialLang());

  constructor() {
    document.documentElement.lang = this.lang() === 'zh' ? 'zh-CN' : 'en';
  }

  private static initialLang(): Lang {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored === 'zh' || stored === 'en') {
        return stored;
      }
    } catch {
      // localStorage unavailable (private mode etc.) — fall through to default.
    }
    return 'zh';
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore persistence failures; the in-memory signal still applies.
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  toggle(): void {
    this.setLang(this.lang() === 'zh' ? 'en' : 'zh');
  }

  /** Whether the current language is the zh-CN translation. */
  isZh(): boolean {
    return this.lang() === 'zh';
  }

  /**
   * Translate `key`. `params` values replace `{name}` placeholders in the
   * translated string. Unknown keys fall back to the key itself and warn
   * (once per key) so missing entries are easy to spot.
   */
  t(key: string, params?: Record<string, string | number | null | undefined>): string {
    this.lang(); // Read the signal so callers bound in templates refresh on switch.
    let text = key;
    if (this.isZh()) {
      const hit = ZH_DICT[key];
      if (hit !== undefined) {
        text = hit;
      } else if (!I18nService.warnedKeys.has(key)) {
        I18nService.warnedKeys.add(key);
        console.warn(`[i18n] missing zh translation: ${key}`);
      }
    }
    if (params) {
      for (const [name, value] of Object.entries(params)) {
        // Nullish params render as empty, matching Angular's interpolation.
        text = text.split(`{${name}}`).join(value === null || value === undefined ? '' : String(value));
      }
    }
    return text;
  }

  private static readonly warnedKeys = new Set<string>();
}
