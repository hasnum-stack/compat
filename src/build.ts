//使用Bun运行时重写
export const build = ({ list, targets }) => {
  const distDir = `dist/result_${+new Date()}`;
  const targetsDir = `${distDir}/targets.json`;
  const listDir = `${distDir}/list.json`;

  Bun.write(targetsDir, JSON.stringify(targets));
  Bun.write(listDir, JSON.stringify(list));
};
