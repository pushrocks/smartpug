export interface ISmartpugConstructorOptions {
    filePath: string;
}
export declare class Smartpug {
    filePath: string;
    private jadeFn;
    constructor(optionsArg: ISmartpugConstructorOptions);
    /**
     * renders html for a certain dataset
     * @param pageDataArg the dataArg tp be used within pug syntax
     */
    getHtmlForData(pageDataArg: any): string;
    /**
     * renders a series of pageDataArgs
     */
    renderSeries(pagesDataArg: any[]): string[];
}
