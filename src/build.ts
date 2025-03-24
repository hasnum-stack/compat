export const build = ({ list, targets, browserslist }) => {
  // 目标文件
  const distDir = `dist/result_${+new Date()}`;

  const targetsDir = `${distDir}/targets.json`;
  const listDir = `${distDir}/list.json`;
  const browserslistDir = `${distDir}/browserslist.json`;

  Bun.write(targetsDir, JSON.stringify(targets));
  Bun.write(listDir, JSON.stringify(list));
  Bun.write(browserslistDir, JSON.stringify(browserslist));
};
