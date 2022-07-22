let handler = async (m, { conn, text, command }) => {
    let yh = global.Nishimiya
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `ʀᴀɴᴅᴏᴍ Nishimiya- ɪѕ ᴄᴜᴛᴇ `.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
  }
  handler.command = /^(Nishimiya)$/i
  handler.tags = ['anime']
  handler.help = ['Nishimiya']
  export default handler
  
  global.Nishimiya = [
    "https://imgur.com/a/9RNr8wh",
    "https://imgur.com/a/XEBODJr",
    "https://imgur.com/a/ufiWWB4",
    "https://imgur.com/a/UJfsLRO",
]