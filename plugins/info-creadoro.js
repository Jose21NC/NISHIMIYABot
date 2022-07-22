import fs from 'fs'
function handler(m, { conn }) {
let text = `
┌──「𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽」─
├❏𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩
├❏Wa.me/50578229009 (BOT)
├❏Wa.me/50576796164 (CREADOR)
└────ׂ─ׂ─ׂ─ׂ───

*⇲㊋ℐⲟᶊℇʛⲟ⃢ɗ㊅⇱*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽  | 𝗝𝗼𝘀𝗲𝗭𝘇𝘇 NI ',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫o| 𝐂𝐫𝐞𝐚𝐭𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./src/admins.jpg"),
sourceUrl: `https://wa.me/50576796164`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = 'https://i.imgur.com/JJM1l2f.jpg'
let str = `🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/J5O2VCn3X6WIeLVNrqDgPU', 'Grupo de WhatsApp:', null, null, [
['️𝐄𝐒𝐓𝐀𝐃𝐎', '.estado'],
['𝐌𝐄𝐍𝐔', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueña|dueño|propietaria|dueño|creadora|creador)$/i
export default handler
