let media = 'https://i.imgur.com/Fh6fcl1.png'
let handler = async (m, { conn, command }) => {
let str = `
┌──「𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽」─
├❏ 🌠 ʜᴏʟᴀ 💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
💜𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎
├❏───ׂ─ׂ─ׂ─ׂ─
├❏✅ *GITHUB*
├❏*${md}*
├❏───ׂ─ׂ─ׂ─ׂ─
├❏✅ *YOUTUBE*
├❏${yt}
├❏───ׂ─ׂ─ׂ─ׂ─
├❏Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram
└────ׂ─ׂ─ׂ─ׂ───
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Jose21NC/NISHIYIMABot.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '.estado'],
['𝐌𝐄𝐍𝐔', '/menu']
], m,)}

handler.command = /^cuentasoficiales|cuentasoficiales\$/i
handler.exp = 35
export default handler
