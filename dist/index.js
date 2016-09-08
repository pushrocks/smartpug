"use strict";
const plugins = require("./smartpug.plugins");
class Smartpug {
    constructor(optionsArg) {
        this.filePath = optionsArg.filePath;
        let jadeString = plugins.smartfile.fs.toStringSync(this.filePath);
        this.jadeFn = plugins.pug.compile(jadeString);
    }
    ;
    /**
     * renders html for a certain dataset
     * @param pageDataArg the dataArg tp be used within pug syntax
     */
    getHtmlForData(pageDataArg) {
        let resultHtml = this.jadeFn(pageDataArg);
        return resultHtml;
    }
    /**
     * renders a series of pageDataArgs
     */
    renderSeries(pagesDataArg) {
        let resultArray = [];
        for (let dataArg of pagesDataArg) {
            resultArray.push(this.getHtmlForData(dataArg));
        }
        return resultArray;
    }
}
exports.Smartpug = Smartpug;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBTTdDO0lBR0ksWUFBWSxVQUF1QztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUE7UUFDbkMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFBQSxDQUFDO0lBRUY7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLFdBQWdCO1FBQzNCLElBQUksVUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDakQsTUFBTSxDQUFDLFVBQVUsQ0FBQTtJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsWUFBbUI7UUFDNUIsSUFBSSxXQUFXLEdBQWEsRUFBRSxDQUFBO1FBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDL0IsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDbEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUE7SUFDdEIsQ0FBQztDQUNKO0FBNUJELDRCQTRCQyJ9