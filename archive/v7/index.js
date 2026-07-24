import extractLines from "pattern-collector-anyjs-extract";

const startFunc = ({ fileContent, importRegex,
    showLog = false, showLogStep1 = false
}) => {

    if (showLog) console.log("imports : ", fileContent, importRegex);

    const importLines = extractLines({
        fileContent, parseRegex: importRegex.parseRegex,
        searchRegex: importRegex.searchRegex || importRegex.searchString,
        showLog: showLogStep1
    });

    if (showLog) console.log("importLines-7 : ", importLines);

    return importLines;

};

export default startFunc;