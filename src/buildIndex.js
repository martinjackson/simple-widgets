const fs = require('fs');

const getExports = (fname) => {
    const names = fs.readFileSync(fname,{ encoding : 'utf8' })
                    .split('\n')
                    .filter( line => line.includes('export '));

    let exportInfo = [];
    names.map (line => {
        let index = line.indexOf('const');
        if (index != -1) {
            line = line.substring(index + 6);
            let end = line.indexOf(' ');
            let exportName = line.substring(0, end);
            if (exportName === 'function') {
                exportName = fname.substring(0, fname.length - 3);
            }
            exportInfo.push({ type: 'C', ename: exportName });
        } else {
            index = line.indexOf('default');
            if (index != -1) {
                line = line.substring(index + 8);
                let end = line.indexOf(' ');
                let exportName = null;
                if (end === -1) {
                    end = line.indexOf(';');
                    if (end === -1) {
                        exportName = line;
                    }
                }
                if (exportName === null) {
                    exportName = line.substring(0, end);
                }
                index = line.indexOf('class');
                if (index !== -1) {
                    line = line.substring(index + 6);
                    end = line.indexOf(' ');
                    exportName = line.substring(0, end);
                }

                if (exportName === 'function') {
                    exportName = fname.substring(0, fname.length - 3);
                }

                exportInfo.push({ type: 'D', ename: exportName });
            } else {
                index = line.indexOf('function');
                if (index !== -1) {
                    line = line.substring(index + 9);
                    let end = line.indexOf(' ');
                    let exportName = line.substring(0, end);
                    index = exportName.indexOf('(');
                    if (index !== -1) {
                        exportName = exportName.substring(0, index);
                    }
                    exportInfo.push({ type: 'F', ename: exportName });
                }
            }
        }
    })

    return exportInfo
}

const files = fs.readdirSync('.')
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => fn !== 'gen_imports.js')
              .filter(fn => fn !== 'buildIndex.js')
              .filter(fn => fn !== 'index.js')

const fileInfo = files.map( fname => { return { filename: fname, exportInfo: getExports(fname) } })
const exportNames = fileInfo.map(info => info.exportInfo.map(i => i.ename)).flat()

const importLines = fileInfo.map (info => {
    let importStmt = 'import ';
    let prevType = '';
    let constant = false;
    let lineLen = 7;

    for (let i = 0; i < info.exportInfo.length; i++) {

        if (info.exportInfo[i].type === 'D') {
            importStmt += info.exportInfo[i].ename;
            lineLen += info.exportInfo[i].ename.length

            if (prevType === 'C') {
                importStmt += ' }';
                lineLen += 2
            }
            prevType = 'D';
        } else {
            constant = true;
            if (prevType === '' || prevType === 'D') {
                importStmt += '{ ';
                lineLen += 2
            }

            importStmt += info.exportInfo[i].ename;
            lineLen += info.exportInfo[i].ename.length
            prevType = 'C'
        }

        if (i < info.exportInfo.length - 1) {
            importStmt += ', ';
            lineLen += 3
        }

        if (lineLen > 100) {
            importStmt += '\n         ';
            lineLen = 9
        }

        lineLen++;
    }

    if (constant === true && prevType === 'C') {
        importStmt += ' }'
        lineLen += 2
    }

    importStmt += ` from './${info.filename}'`;
    return importStmt
})

const prettyList = (arr) => {
    return arr.join(', ').replace(/([^\n]{1,99})\s/g, '$1\n         ');   // word wrap after line length > 99
}

const formFns = ['applyOptions', 'FormFields', 'pretty', 'Show', 'Input', 'Form', 'useFetch', 'setFieldGenerator', 'fieldGeneratorLookup']
const allNames = exportNames.concat(formFns)       // exportNames[] + formFns[]

importLines.push(`import { ${prettyList(formFns)} } from './forms/index.js'\n`)
importLines.push(`export { ${prettyList(allNames)} }\n`)

fs.writeFileSync('./index.js', importLines.join('\n'));         // wipe out original file, start over

