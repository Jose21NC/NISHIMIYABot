import fs from 'fs'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.instagram.comVA/?igshid=YmMyMTA2M2Y=*\n\n𝙀𝙉𝙏𝙀𝙍 𝘼 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙇𝙄𝙉𝙆 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙔𝙊𝙐𝙍 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝙄𝙈𝘼𝙂𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} https:/?igshid=YmMyMTA2M2Y=*`
const results = await instagramdl(args[0])
.catch(async _ => await instagramdlv2(args[0]))
.catch(async _ => await instagramdlv3(args[0]))
.catch(async _ => await instagramdlv4(args[0]))
for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `✨ *ENLACE | URL:* ${url}`, m)
  
 let info = `💖 *Infórmate sobre las Novedades y recuerda tener la última versión.*\n\n💝 *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒️', '/grupos']
], m,)
  
} 
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i 
handler.exp = 70
export default handler
