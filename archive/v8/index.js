import extractLines from "pattern-collector-anyjs-extract";
import packageJson from '../../package.json' with {type: 'json'};

const startFunc = ({ fileContent, parseRegex, searchRegex,
    showLog = false, showLogStep1 = false
}) => {

    if (showLog) console.log(`${packageJson.name} - imports : `, fileContent, parseRegex, searchRegex);

    const importLines = extractLines({
        fileContent, parseRegex, searchRegex,
        showLog: showLogStep1
    });

    if (showLog) console.log(`${packageJson.name} - exports : `, importLines);

    return importLines;

};

export default startFunc;