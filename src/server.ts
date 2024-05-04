import * as fs from 'fs'

function writeFile(path: string) {
  let file = fs.openSync(`src/${path}`, "w+");

  if (path.includes('temp')) {
    return
  }

  fs.writeFileSync(file, "Permanent \n");
  fs.closeSync(file);
}

writeFile("a.txt");
writeFile("temp.txt");