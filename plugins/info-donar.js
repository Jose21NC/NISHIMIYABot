let media = 'https://i.imgur.com/JJM1l2f.jpg'
let handler = async (m, { conn, command }) => {
let str = `
┌──「𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽」─
├❏ Hola, Gracias por querer apoyarme, puedes suscribirte a mi canal y darle una estrella al repo en GitHub.
└────ׂ─ׂ─ׂ─ׂ───
┌──「𝙋𝙖𝙮𝙋𝙖𝙡 」─
├❏https://paypal.me/JObregonalonzo
└────ׂ─ׂ─ׂ─ׂ───
┌──「Grupo de WhatsApp:」─
├❏https://chat.whatsapp.com/J5O2VCn3X6WIeLVNrqDgPU
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://wa.me/50576796164', '𝙲𝚁𝙴𝙰𝙳𝙾𝚁', null, null, [
], m,)}

handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 33

export default handler
