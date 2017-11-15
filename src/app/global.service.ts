import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    networkConnection: boolean = navigator.onLine;

    assetsPath: string = "/pwa/assets/";
}