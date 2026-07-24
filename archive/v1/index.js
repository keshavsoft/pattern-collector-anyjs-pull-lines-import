import extractLines from "pattern-collector-anyjs-extract";
// import getUseLines from "pattern-collector-routesjs-use-extract";

const startFunc = ({ fileContent, importRegex, consumptionRegex,
    showLog = false, showLogStep1 = false
}) => {

    if (showLog) console.log("imports : ", fileContent, importRegex, consumptionRegex);

    const importLines = extractLines({
        fileContent, parseRegex: importRegex.parseRegex,
        searchRegex: importRegex.searchRegex || importRegex.searchString,
        showLog: showLogStep1
    });

    if (showLog) console.log("importLines-7 : ", importLines);

    const useLines = extractLines({
        fileContent, parseRegex: consumptionRegex.parseRegex,
        searchRegex: consumptionRegex.searchRegex || consumptionRegex.searchString,
        showLog: showLogStep1
    });

    // const useLines = getUseLines({
    //     fileContent,
    //     showLog: showLogStep1
    // });

    if (showLog) console.log("useLines-11 : ", useLines);

    return {
        importLines,
        useLines
    };
};

export default startFunc;