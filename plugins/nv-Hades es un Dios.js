import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Nishimiya es un Dios.mp3'
conn.sendFile(m.chat, vn, 'Nishimiya es un Dios.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Nishimiya es un Dios|Nishimiya es un Dios/
handler.command = new RegExp
export default handler

