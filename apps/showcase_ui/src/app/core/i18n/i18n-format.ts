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

import { I18nService } from './i18n.service';

let service: I18nService | null = null;

/** Bind the root I18nService so non-DI code (utils) can translate. */
export function registerI18n(s: I18nService): void {
  service = s;
}

/**
 * Translate a parametrized message from plain TS (utils, services):
 *   formatMsg('Reviewing steps {from}–{to}', { from: 1, to: 4 })
 * Falls back to interpolating the English key itself before the app shell
 * registers the service, so early calls and unit tests keep working.
 */
export function formatMsg(key: string, params?: Record<string, string | number | null | undefined>): string {
  if (service) {
    return service.t(key, params);
  }
  if (!params) {
    return key;
  }
  let text = key;
  for (const [name, value] of Object.entries(params)) {
    text = text.split(`{${name}}`).join(value === null || value === undefined ? '' : String(value));
  }
  return text;
}
