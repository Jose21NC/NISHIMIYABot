let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n ${await conn.getName(jid)}\n✦ ${jid} \n${chat?.metadata?.read_only ? '❌ *SIN ESTAR AQUÍ | NO*' : '✅ *SIGO AQUÍ | YES*'}\n\n`
m.reply(`*${gt} ESTÁ EN ESTOS GRUPOS*
*IS IN THESE GROUPS:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://chat.whatsapp.com/J5O2VCn3X6WIeLVNrqDgPU', 'ɢʀᴜᴘᴏ ᴅᴇ ᴡʜᴀᴛꜱᴀᴘᴘ:', null, null, [
['️𝐌𝐄𝐍𝐔', '.menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎 ', '/estado']
], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
