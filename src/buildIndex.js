const fs = require('fs');

let fileInfo = [];
const files = fs.readdirSync('.')
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => fn !== 'gen_imports.js')
              .filter(fn => fn !== 'buildIndex.js')
              .filter(fn => fn !== 'index.js')

const ans = files.map( fname => {
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
    fileInfo.push({ filename: fname, exportInfo: exportInfo })
  })

let exportStmt = 'export { ';
let count = 1;
let eCount = 1;
const NEWLINE = 5;

fileInfo.map (info => {
    let importStmt = 'import ';
    let prevType = '';
    let constant = false;
    count = 1;

    for (let i = 0; i < info.exportInfo.length; i++) {
        exportStmt += `${info.exportInfo[i].ename}, `;
        if (eCount % NEWLINE === 0) {
            exportStmt += '\n';
        }
        eCount++;

        if (info.exportInfo[i].type === 'D') {
            importStmt += info.exportInfo[i].ename;
            if (prevType === 'C') {
                importStmt += ' } ';
            }
            prevType = 'D';
        } else {
            constant = true;
            if (prevType === '' || prevType === 'D') {
                importStmt += ' { ';
            }
            importStmt += info.exportInfo[i].ename;
            prevType = 'C'
        }

        if (i < info.exportInfo.length - 1) {
            importStmt += ', ';
        }

        if (count % NEWLINE === 0) {
            importStmt += '\n';
        }

        count++;
    }

    if (constant === true && prevType === 'C') {
        importStmt += ' } '
    }

    importStmt += ` from './${info.filename}'\n\n`;
    fs.appendFileSync('./index.js', importStmt);
})

let length = 2;
if (exportStmt.endsWith('\n')) {
    length = 3;
}

exportStmt = exportStmt.substring(0, exportStmt.length - length);
exportStmt += ` }\n\n`;

fs.appendFileSync('./index.js', exportStmt);