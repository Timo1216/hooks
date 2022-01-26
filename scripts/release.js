const utils = require('@umijs/utils');
const exec = require('./utils/exec');
// const getPackages = require('./utils/getPackages');
const pkg = require('../package.json');

const { yParser, execa, chalk } = utils;
const cwd = process.cwd();
// 命令行参数 --skipGitStatusCheck
const args = yParser(process.argv);

function packageExists({ name, version }) {
  const { stdout } = execa.sync('npm', ['info', `${name}@${version}`]);
  return stdout.length > 0;
}

function printErrorAndExit(message) {
  console.error(chalk.red(message)); // 打印红色
  process.exit(1); // 退出
}

function logStep(name) {
  console.log(`${chalk.gray('>> Release:')} ${chalk.magenta.bold(name)}`);
}

const { name, version } = pkg;

/**
 * --skipBuild
 */

async function release() {
  // build
  logStep('build start');
  if (!args.skipBuild) {
    logStep('build');
    await exec('npm', ['run', 'build']);
    logStep('build end');
  } else {
    logStep('build is skipped, since args.skipBuild is supplied');
  }
  logStep(`version: ${version}`);
  // publish
  if (packageExists({ name, version })) {
    printErrorAndExit(`package ${name}@${version} is already exists on npm`);
  }
  logStep('gen changelog start');
  await exec('npm', ['run', 'changelog']);
  logStep('gen changelog end');
  exec('npm', ['publish']);
}

release().catch((err) => {
  console.error(err);
  process.exit(1);
});
