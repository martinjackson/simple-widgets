const fs = require('fs');

// ----------------------------------------------------------------------------
const fileNameOnly = (fullName) => {
  // remove leading directory path
  const idx = fullName.lastIndexOf("/")
  return (idx != -1) ? fullName.substring(idx+1) : fullName
}

// ----------------------------------------------------------------------------
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
            exportInfo.push({ type: 'C', ename: fileNameOnly(exportName) });
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

                exportInfo.push({ type: 'D', ename: fileNameOnly(exportName) });
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
                    exportInfo.push({ type: 'F', ename: fileNameOnly(exportName) });
                }
            }
        }
    })

    return exportInfo
}

// ----------------------------------------------------------------------------
const genImports = (info) => {
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

  importStmt += ` from '${info.filename}'`;
  return importStmt
}

// ----------------------------------------------------------------------------
const readDir = (dir) => {
  const list = fs.readdirSync(dir)

  return list.map(name => dir+name)
}
// ============================================================================

const dirs = [ './', './forms/', './forms/model/', './forms/img/', ]

const fullList =  dirs.map(dir => readDir(dir)).flat()
// console.log('fullList :', fullList);

const skip = ['./gen_imports.js', './buildIndex.js', './index.js', './forms/index.js', './forms/model/bootstrapDictionary.js']

const files = fullList
              .filter(fn => fn.endsWith('.js'))
              .filter(fn => !skip.includes(fn))

let fileInfo = files.map( fname => { return { filename: fname, exportInfo: getExports(fname) } })
fileInfo = fileInfo.filter(info => info.exportInfo.length > 0)       // remove any files that have no exports

const exportNames = fileInfo.map(info => info.exportInfo.map(i => i.ename)).flat()
const importLines = fileInfo.map (info => genImports(info)  )

const prettyList = (arr) => {
    return arr.join(', ').replace(/([^\n]{1,99})\s/g, '$1\n         ');   // word wrap after line length > 99
}

const lines = ['\nimport \'./index.css\'\n'].concat(importLines)
lines.push(`\nexport { ${prettyList(exportNames)} }\n`)

fs.writeFileSync('./index.js', lines.join('\n'));         // wipe out original file, start over

// const test = getExports('./makeChangeHandler.js')
// console.log('test on makeChangeHandler.js :', test);
