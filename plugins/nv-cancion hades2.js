import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/cancion Nishimiya2.mp3'
conn.sendFile(m.chat, vn, 'cancion Nishimiya2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Cancion Nishimiya2|cancion Nishimiya2/
handler.command = new RegExp
export default handler

