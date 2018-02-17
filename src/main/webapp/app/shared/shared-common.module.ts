import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    EnterpriseArchitectureSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        EnterpriseArchitectureSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        EnterpriseArchitectureSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class EnterpriseArchitectureSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
