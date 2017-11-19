import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable()
export class GlobalService {
    networkConnection: boolean = navigator.onLine;

    assetsPath: string = (isDevMode()) ? '/assets/' : '/pwa/assets/';
}