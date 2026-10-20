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

import { Inject, Pipe, PipeTransform } from '@angular/core';

import { I18nService } from './i18n.service';

/**
 * Translation pipe keyed by English source text:
 *   {{ 'Re-check' | t }}
 *   {{ 'Step {i} of {n}' | t: {i: 2, n: 5} }}
 *
 * Impure by design: it re-evaluates on every change-detection pass so all
 * bindings pick up a language switch immediately without manual
 * invalidation. The transform is a dictionary lookup, so the cost is low.
 */
@Pipe({ name: 't', pure: false, standalone: true })
export class TranslatePipe implements PipeTransform {
  constructor(@Inject(I18nService) private readonly i18n: I18nService) {}

  transform(key: string | null | undefined, params?: Record<string, string | number | null | undefined>): string {
    if (key === null || key === undefined || key === '') {
      return key ?? '';
    }
    return this.i18n.t(key, params);
  }
}
