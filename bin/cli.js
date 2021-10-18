#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const yargs = require('yargs')


const title = chalk.red(figlet.textSync('md links', {font: 'Univers'}));
console.log(title)

if (process.argv[2]==undefined){
    console.log(chalk.bgBlackBright.black('          No puedo trabajar sin una ruta! Por favor, introduce una.          '))
}

/*console.log(chalk.blackBright(process.argv[2]))
console.log(chalk.red(process.argv[2]))
console.log(chalk.redBright(process.argv[2]))
console.log(chalk.blue(process.argv[2]))
console.log(chalk.blueBright(process.argv[2]))
console.log(chalk.magenta(process.argv[2]))
console.log(chalk.magentaBright(process.argv[2]))
console.log(chalk.cyan(process.argv[2]))
console.log(chalk.cyanBright(process.argv[2]))
console.log(chalk.white(process.argv[2]))
console.log(chalk.whiteBright(process.argv[2]))*/