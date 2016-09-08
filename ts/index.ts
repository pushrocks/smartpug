import * as plugins from './smartpug.plugins'

export interface ISmartpugConstructorOptions {
    filePath: string
}

export class Smartpug {
    filePath: string
    private jadeFn: any
    constructor(optionsArg: ISmartpugConstructorOptions) {
        this.filePath = optionsArg.filePath
        let jadeString = plugins.smartfile.fs.toStringSync(this.filePath)
        this.jadeFn = plugins.pug.compile(jadeString)
    };

    /**
     * renders html for a certain dataset
     * @param pageDataArg the dataArg tp be used within pug syntax
     */
    getHtmlForData(pageDataArg: any): string {
        let resultHtml: string = this.jadeFn(pageDataArg)
        return resultHtml
    }

    /**
     * renders a series of pageDataArgs
     */
    renderSeries(pagesDataArg: any[]): string[] {
        let resultArray: string[] = []
        for (let dataArg of pagesDataArg) {
            resultArray.push(this.getHtmlForData(dataArg))
        }
        return resultArray
    }
}
