import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//ARCHIVO DE CONFIGURACION, AQUI SE PUEDEN EDITAR ALGUNAS COSAS, PERO NO CAMBIES LO QUE SE ENCUENTRA EN AZUL, RECUERDA DEJAR CREDITOS

//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰
global.owner = [
  ['50576796164', 'NISHIYIMABot', true], //No cambies este parametro
  ['50578229009'],
  ['00000000000'], //Pon aqui los numeros a ser owner
  ['00000000000'],
]
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = [] 
global.prems = ['50576796164'], //Usuarios Premium, estos usuarios no tendran limites del bot

global.APIs = { // API Prefix, aqui van las los prefijos de las API key
  
//⊱ ━━━━━.⋅ name: 'https://website' ⋅.━━━━ ⊰
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com',
  botstyle: 'https://botstyle-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  ana: 'https://anabotofc.herokuapp.com/',
  kanx: 'https://kannxapi.herokuapp.com/',
  dhnjing: 'https://dhnjing.xyz'
},
  
global.APIKeys = { // APIKey Here, Aqui van las API keys
  //⊱ ━━━━━.⋅ 'https://website': 'apikey' ⋅.━━━━ ⊰
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

//Paquetes de Stickers, Nombre y Autor

//⊱ ━━━━━.⋅ Sticker WM ⋅.━━━━ ⊰

global.packname = '𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽'
global.author = '𝗝𝗼𝘀𝗲𝗭𝘇𝘇'

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰
//Porfavor no edites la informacion de donacion ni el canal de youtube, trabajo para traerles bots a todos, asi  que porfavor
//deja esto para que el bot reciba soporte y mas personas lo conozcan

global.vs = '1.0.30'
global.version = vs

global.gt = '𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽'
global.𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽 = gt

global.yt = 'https://youtube.com/channel/UCO3zMzHQ3n2C0ypN2Y5aeeg9wQi-z8U'
global.youtube = yt

global.ig = 'https://www.instagram/josedev2nc'
global.Nishimiyaig = ig

global.md = 'https://github.com/Jose21NC/NISHIYIMABot'
global.𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽 = md

global.nn = 'https://chat.whatsapp.com/J5O2VCn3X6WIeLVNrqDgPU'
global.nngrupo = nn

global.nnn = 'https://chat.whatsapp.com/J5O2VCn3X6WIeLVNrqDgPU'
global.nnngrupo = nnn

global.paypal = 'https://paypal.me/JObregonalonzo'
global.donar = paypal

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰
//Informes y respuestas personalizadas, no recomiendo cambiar mucho este punto
global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱❕⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n'
global.exito = eg

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

//Wait y Nombre del bot, para cambiar el nombre del bot, no pongas un nombre largo ya que las respuestas estan echas
//para tener un numero predeterminado de caracteres

//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = '⇲㊋ℐⲟᶊℇʛⲟ⃢ɗ㊅⇱'
global.igfg = '𝗡𝗶𝘀𝗵𝗶𝗺𝗶𝘆𝗮𝜷𝛔𝞽'
global.wait = '*⌛ _Cargando..._ ▬▬▬▭*'

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.multiplier = 450 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
