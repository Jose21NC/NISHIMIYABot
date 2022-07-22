let media = 'https://i.imgur.com/JJM1l2f.jpg'
let handler = async (m, { conn, command }) => {
let str = `
┌「NISHIMIYA-BOT」
├❏ Te invitamos a unirte a los grupos oficiales de NishimiyaBOT
└────ׂ─ׂ─ׂ─ׂ───
┌─「Grupo Ofc」─
├❏https://chat.whatsapp.com/J5O2VCn3X6WIeLVNrqDgPU
└────ׂ─ׂ─ׂ─ׂ───
┌─「Laboratorio」─
├❏https://chat.whatsapp.com/JMyGhW1QAn7Ae2K3xpTypO
└────ׂ─ׂ─ׂ─ׂ───
┌─「NEXUS legion」─
├❏https://chat.whatsapp.com/DcpZegJrEkWBTJSaTWLtmv
└────ׂ─ׂ─ׂ─ׂ───
┌`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/50576796164', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎 ','/estado']
], m,)}

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
