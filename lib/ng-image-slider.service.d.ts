import * as i0 from "@angular/core";
export declare class NgImageSliderService {
    constructor();
    isBase64(str: any): boolean;
    base64FileExtension(str: any): any;
    orderArray(arr?: any[], orderType?: string): any[];
    /**
     * Verify if image exist
     * @input url: string: Image url
     * @returns boolean: true/false
     */
    isImageExist(url: any): Promise<unknown>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgImageSliderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgImageSliderService>;
}
