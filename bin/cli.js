#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const yargs = require('yargs');
const fs = require("fs");
const mdLinks = require("../comp/mdLinks.js");
const stats = require("../comp/stats.js");

console.log(' ')
console.log(chalk.black.bgMagentaBright('                          Welcome to the library...                          '))
const title = chalk.red(figlet.textSync('md links', {font: 'Univers'}));
console.log(title)
console.log(chalk.black.bgMagentaBright('                 For more information, use: md-links --help                  '))
console.log(' ')

const options = yargs
 .option("validate", { alias: "v", describe: chalk.magentaBright("Validate the links found within the md files"), type: "boolean", demandOption: false })
 .option("stats", { alias: "s", describe: chalk.magentaBright("Makes statistics with the links found"), type: "boolean", demandOption: false })
 .option("help", { alias: "h", describe: chalk.magentaBright("Show the library commands"), type: "boolean", demandOption: false })
 .option("version", {describe: chalk.magentaBright("Show the version number"), type: "boolean", demandOption: false })
 .epilog(chalk.black.bgMagentaBright('----------------- Created by Isabel Valdés @ Laboratoria 2021 ------------------'))
 .argv

const validateOption = (options.v) ? true : false ;
const statsOption = (options.s) ? true : false ;


if (process.argv[2]==undefined || !fs.existsSync(process.argv[2])){
    console.log(chalk.black.bgBlackBright('          I can not work without a valid path! Please, give me one.          '))
    console.log(chalk.bgBlackBright.black('          The format required is: ') + chalk.bgBlack.blueBright(' md-links ') + chalk.bgBlack.bold.cyanBright('"path" ') + chalk.bgBlack.blueBright('option1 ') + chalk.bgBlack.blueBright('option2 ') + chalk.bgBlackBright('          '))
    console.log(chalk.black.bgBlackBright('             - ~ -  The path can be absolute or relative  - ~ -              '))
} else {
    const pathFiles = process.argv[2];
    const mdOptions = {
        validate: validateOption,
        stats: statsOption
    }
    //console.log(pathFiles)
    //console.log(mdOptions)
    mdLinks.mdLinks(pathFiles, mdOptions)
    .then((res) => {
        if (mdOptions.stats){
            console.log(chalk.cyan('            The statistics of the links found in the MD files is:            '))
            let result = stats.stats(res)
            if (result.hasOwnProperty('Broken')){
                console.log(chalk.magentaBright('               Total: ') + chalk.cyan(result.Total) + chalk.magentaBright('         Unique: ') + chalk.blue(result.Unique) + chalk.magentaBright('          Broken: ') + chalk.redBright(result.Broken))
            } else {
                console.log(chalk.magentaBright('                         Total: ') + chalk.cyan(result.Total) + chalk.magentaBright('         Unique: ') + chalk.blue(result.Unique))
            }
        } else {
            console.log(chalk.cyan('                    The links found in the MD files are:                    '))
            res.forEach(elem => {
                const file = chalk.magentaBright(elem.file)
                const text = chalk.blue(elem.text)
                const link = chalk.cyan(elem.href)
                let status = ""
                let message = ""
                if (elem.status == 404){
                    status = chalk.redBright(elem.status)
                    message = chalk.white.bgRed(' ' + elem.message + ' ')
                } 
                if (elem.status != 404 && elem.status != undefined){
                    status = chalk.yellowBright(elem.status)
                    message = chalk.black.bgGreen(' ' + elem.message + ' ')
                }
                console.log(file + ' ' + text + ' ' + link + ' ' + status + ' ' + message)
            })
        }
    })
    .catch((error) => console.log(chalk.cyanBright('                      ' + error)))
}

