
let fs = require('fs')
let chalk = require('chalk')
let yargs = require('yargs')
let moment = require('moment-timezone')

//=========== STICKER WM =============//
const stick = JSON.parse(fs.readFileSync("src/exif.json"))
if (stick.spackname == '' || stick.sauthor == '') {
  var sticker_name = 'Made with WeA Bot'
  var sticker_author = 'Rahardiyan'
} else {
  var sticker_name = stick.spackname
  var sticker_author = stick.sauthor
}
const wm = JSON.parse(fs.readFileSync("src/wm.json"))
if (wm.wm == '') {
  var hias_wm = 'ππΌπΈ πΉππ πΉπ βπΈβπΈβπ»πππΈββ€'
} else {
  var hias_wm = wm.wm
} 
const symbol = JSON.parse(fs.readFileSync("src/symbol.json"))
if (symbol.symbolA == '') {
  var hias_symA = 'δΉ '
  var hias_symB = ' β’ '
} else {
  var hias_symA = symbol.symbolA
  var hias_symB = symbol.symbolB
} 
let rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      name: 'π€',
      age: 'π΄',
      premium: 'π₯',
      tag: 'π',
      number: 'β¨',
      wame: 'πΉ',
      rank: 'π±',
      before: 'π',
      after: 'π¦',
      atm: 'π§',
      warning: 'β οΈ',
      level: 'π§¬',
      limit: 'π',
      health: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      trash: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      string: 'πΈοΈ',
      horse: 'π',
      cat: 'π',
      dog: 'π',
      fox: 'π¦',
      petFood: 'π',
      iron: 'βοΈ',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

// batas
let genius = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=genius-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text="
let glow = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=glow-logo&fontsize=50&doScale=true&scaleWidth=300&scaleHeight=300&text="
let jamm = moment.tz('Asia/Jakarta').format('HH')
let flaTime
if (jamm > 17) flaTime = genius 
else flaTime = glow 
const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
const prefix = new RegExp('^[' + (opts['prefix'] || 'xzXZ/i!#$%+Β£Β’β¬Β₯^Β°=ΒΆβΓΓ·ΟββΒ©Β?:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
global.set = {
//========={ SETTING HERE }=========//
    name: "My WeA Bot",
    version: "1.0.1",
    repo: 'https://github.com/xyzyyyy',
    browser: ['My-MD by rahardiyan', 'Safari', '1.0.0'],
    wm: hias_wm,
    sa: hias_symA,
    sb: hias_symB,
    pack: sticker_name,
    auth: sticker_author,
    owner: [
        ['62882008211320', 'Rahardiyan', true],
        // JSON.parse(readFileSync('./src/owner.json'))
        // ['number', 'name', dev?]
    ],
//===================================//
    mods: [], //JSON.parse(readFileSync('./src/owner.json')),
    prems: [], //JSON.parse(readFileSync('./src/owner.json')),
    api: {
        name: { 
            s: {// API Prefix
                // name: 'https://website'
                neoxr: 'https://api.neoxr.my.id',
                violet: 'https://violetics.pw',
                xteam: 'https://api.xteam.xyz',
                zahir: 'https://zahirr-web.herokuapp.com',
            }
        },
        key: {
            s: {// APIKey Here
                // 'https://website': 'apikey'
               'https://api.neoxr.my.id': '5VC9rvNx',
               'https://violetics.pw': '0b55-fada-712f',
               'https://api.xteam.xyz': 'd90a9e986e18778b',
               'https://zahirr-web.herokuapp.com': 'zahirgans',      
            }
        }
    },
    opts: opts,
    prefix: prefix,
    timestamp: {
        start: new Date
    },
    fla: flaTime,
    rpg: rpg,
}
// batas

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

let file_exif = "src/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./src/exif.json')
})

let file_wm = "src/wm.json"
fs.watchFile(file_wm, () => {
  fs.unwatchFile(file_wm)
  console.log(chalk.redBright("Update 'wm.json'"))
  delete require.cache[file_wm]
  require('./src/wm.json')
})

let file_symbol = "src/symbol.json"
fs.watchFile(file_symbol, () => {
  fs.unwatchFile(file_symbol)
  console.log(chalk.redBright("Update 'symbol.json'"))
  delete require.cache[file_symbol]
  require('./src/symbol.json')
})
