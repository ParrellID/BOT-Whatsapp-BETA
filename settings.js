
const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6285807231447', '0']
global.ownerName = 'ParrellID & All Rights Reserved'
global.packname = 'Powered by ❤️'
global.author = 'FARxOFC'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'session'

//Message Nya Ubah Disini
global.mess = {
admin: '❗| Anda bukan Admin!',
botAdmin: '❗| BOT bukanlah Admin!',
botOwner: '❗| Anda bukanlah Owner dari BOT!',
group: '❗| Command ini hanya bisa digunakan pada Group!',
private: '❗| hanya bisa digunakan *Private Chat!*',
wait: '⏳| Loading...',
done: '☑️ | Done!'
}

//Sesuaikan
global.thumb = fs.readFileSync('./media/ichi.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/ichi.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
