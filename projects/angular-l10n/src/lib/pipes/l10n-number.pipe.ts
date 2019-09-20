import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';

import { L10nAsyncPipe } from '../models/l10n-async-pipe';
import { L10nIntlService } from '../services/l10n-intl.service';
import { L10nTranslationService } from '../services/l10n-translation.service';

@Pipe({
    name: 'l10nNumber',
    pure: true
})
export class L10nNumberPipe implements PipeTransform {

    constructor(protected intl: L10nIntlService) { }

    public transform(value: any, language: string, options?: any, currency?: string): string | null {
        if (value == null || value === '') return null;

        return this.intl.formatNumber(value, options, language, currency);
    }

}

@Pipe({
    name: 'l10nNumberAsync',
    pure: false
})
export class L10nNumberAsyncPipe extends L10nAsyncPipe implements PipeTransform {

    constructor(protected translation: L10nTranslationService, protected cdr: ChangeDetectorRef, protected intl: L10nIntlService) {
        super(translation, cdr);
    }

    public transform(value: any, options?: any): string | null {
        if (value == null || value === '') return null;

        return this.intl.formatNumber(value, options);
    }

}