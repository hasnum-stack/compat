import compat from "core-js-compat";
import fs from "node:fs";
import path from 'node:path';

const {
  list, // array of required modules
  targets, // object with targets for each module
} = compat({
  // modules: "es",
  targets: "> 0.2%, chrome >= 71, firefox >= 62, edge >= 79, safari >= 13, ios_saf >= 13, not dead",
});
// console.log(list);
// targets输出到dist,直接创建文件覆盖
const distDir = path.resolve(process.cwd(), "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}
const resultDir = path.resolve(distDir, `result_${+ new Date()}_`);
fs.mkdirSync(resultDir);

fs.writeFileSync(path.resolve(process.cwd(), resultDir, 'targets.json'), JSON.stringify(targets, null, 2));
fs.writeFileSync(path.resolve(process.cwd(), resultDir, 'list.json'), JSON.stringify(list, null, 2));
