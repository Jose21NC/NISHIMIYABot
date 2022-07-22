import fs from 'fs'
function handler(m, { conn }) {
let text = `
┌「𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽」
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫяєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├❏ hola bien Bienvenid@s 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫяєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
├❏──ׂ─ׂ─ׂ─ׂ───
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶Presentarse
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶con foto 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶nombre 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ ⇶edad 
└────ׂ─ׂ─ׂ─ׂ───
┌「ΝΣχμѕ 」
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Lo que se hace en esta legion 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Somo un Legion los mejores
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Atacamos grupos xxx
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Mandar a soporte 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacker teléfonos
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Robar número de WhatsApp
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacker Facebook
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacer números virtuales
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacer virus
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Espira las personas 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Hacer su propio WhatsApp 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Mandar WhatsApp inmunes
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Troyanos
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Puedes usar el bot la legión 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Recuperar contraseñas 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Atacar legiones hacen cosa por diversión 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Joder personas cp
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Envira virus en laboratorio 
└────ׂ─ׂ─ׂ─ׂ───
├❏ ΝΣχμѕ  
├❏──ׂ─ׂ─ׂ─ׂ───
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ  ➣⃘⃕͜⃟⃤꙰.
└────ׂ─ׂ─ׂ─ׂ───
┌「ΝΣχμѕ」
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Gracias por su atención 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Somos una legión
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ Todo esto lo hacemos con el fin de hacer le bien 
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ No por beneficios propio
├❏ ☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫ яєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.
└────ׂ─ׂ─ׂ─ׂ───
┌「☠︎︎⃟ࣩࣧ⸸₂₀ᷳ₂ᷫяєνєℓα¢ιÓи➣⃘⃕͜⃟⃤꙰.」
https://chat.whatsapp.com/DcpZegJrEkWBTJSaTWLtmv
└────ׂ─ׂ─ׂ─ׂ───
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

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/J5O2VCn3X6WIeLVNrqDgPU', 'ɢʀᴜᴘᴏ ᴅᴇ ᴡʜᴀᴛꜱᴀᴘᴘ:', null, null, [
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(reclutamiento)$/i
export default handler
