import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 

conn.reply(m.chat, `${eg} *[❗𝐈𝐍𝐅𝐎❗] Gracias por usar NISHIMIYABot, bot de JoseZzz. Porfavor suscribete al canal de youtube o dale estrella al repositorio en github, si necesitas ayuda con el bot puedes contactarme al wa.me/50576796164*`, m)

const tmp = [tmpdir(), join(__dirname, '../plugins')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})} //NO USAR ESTE COMANDO EN HEROKU | DO NOT USE THIS COMMAND ON HEROKU
handler.help = ['DELETE_ALL']
handler.tags = ['General']
handler.command = /^(DELETE_ALL=01090|ERASE_ALL=0109|BORARR_TODO=0109)$/i
handler.exp = 500
handler.rowner = true
export default handler

