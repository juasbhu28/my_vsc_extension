export class MinifyJson {

    minifyJson(text: string) : string {
        const obj = JSON.parse(text);
        const jsonString = JSON.stringify(obj);
        const minifiedJsonString = jsonString
            .replace(/[ \t]*\/\/.*\n/g, '') // remove single line comments
            .replace(/[ \t]*\/\*[\s\S]*?\*\//g, '') // remove multi line comments
            .replace(/\n/g, '') // remove new lines
            .replace(/\r/g, '') // remove carriage returns
        return minifiedJsonString;
    }

}
