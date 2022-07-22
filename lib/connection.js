// @ts-check

// TODO: Finish this

import * as ws from 'ws'
import path from 'path'
import storeSystem from './store.js'
import Helper from './helper.js'
import { HelperConnection } from './simple.js'
import importFile from './import.js'
import db, { loadDatabase } from './database.js'
import pino from 'pino';
import P from 'pino';
import pretty from 'pino-pretty';
const stream = pretty({ colorize: true })

/** @type {import('@adiwajshing/baileys')} */
// @ts-ignore
const { DisconnectReason, default: makeWASocket } = (await import('@adiwajshing/baileys')).default

const authFolder = 'sessions'
const storeFile = `${Helper.opts._[0] || 'data'}.store.json`
const authState = await storeSystem.useMultiFileAuthState(authFolder)
const store = storeSystem.makeInMemoryStore()
store.readFromFile(storeFile)

/** @type {Partial<import('@adiwajshing/baileys').SocketConfig>} */
const connectionOptions = {
    printQRInTerminal: true,
    browser: ['Mystic-Bot','Edge','1.0.0'],
    auth: authState.state,
    getMessage: async (key) => (store.loadMessage(key.remoteJid, key.id) || store.loadMessage(key.id) || {}).message || null,
    logger: P({ level: 'silent'})
    //logger: pino({ level: 'error' },stream)
}

/** 
 * @typedef {{ handler?: typeof import('../handler').handler, participantsUpdate?: typeof import('../handler').participantsUpdate, groupsUpdate?: typeof import('../handler').groupsUpdate, onDelete?:typeof import('../handler').deleteUpdate, connectionUpdate?: typeof connectionUpdate, credsUpdate?: () => void }} EventHandlers
 * 
 * @typedef {ReturnType<makeWASocket> & { isInit?: boolean, isReloadInit?: boolean } & EventHandlers} Socket 
 */


/** @type {Map<string, Socket>} */
let conns = new Map();
/** 
 * @param {Socket?} oldSocket 
 * @param {{ handler?: typeof import('../handler') }} opts
 */
async function start(oldSocket = null, opts = {}) {
    /** @type {Socket} */
    let conn = makeWASocket(connectionOptions)
    HelperConnection(conn)

    if (oldSocket) {
        conn.isInit = oldSocket.isInit
        conn.isReloadInit = oldSocket.isReloadInit
    }
    if (conn.isInit == null) {
        conn.isInit = false
        conn.isReloadInit = true
    }

    store.bind(conn.ev, {
        groupMetadata: conn.groupMetadata
    })
    await reload(conn, false, opts.handler).then((success) => console.log('- bind handler event -', success))

    return conn
}


let OldHandler = null
/** 
 * @param {Socket} conn 
 * @param {boolean} restartConnection
 * @param {typeof import('../handler') } handler
 */
async function reload(conn, restartConnection, handler = null) {
    if (!handler) handler = await importFile(Helper.__filename(path.resolve('./handler.js'))).catch(console.error)
    if (handler instanceof Promise) handler = await handler;
    if (!handler && OldHandler) handler = OldHandler
    OldHandler = handler
    // const isInit = !!conn.isInit
    const isReloadInit = !!conn.isReloadInit
    if (restartConnection) {
        try { conn.ws.close() } catch { }
        // @ts-ignore
        conn.ev.removeAllListeners()
        Object.assign(conn, await start(conn) || {})
    }

    if (!isReloadInit) {
        if (conn.handler) conn.ev.off('messages.upsert', conn.handler)
        if (conn.participantsUpdate) conn.ev.off('group-participants.update', conn.participantsUpdate)
        if (conn.groupsUpdate) conn.ev.off('groups.update', conn.groupsUpdate)
        if (conn.onDelete) conn.ev.off('messages.delete', conn.onDelete)
        if (conn.connectionUpdate) conn.ev.off('connection.update', conn.connectionUpdate)
        if (conn.credsUpdate) conn.ev.off('creds.update', conn.credsUpdate)
    }
    if (handler) {
        conn.handler = handler.handler.bind(conn)
        conn.participantsUpdate = handler.participantsUpdate.bind(conn)
        conn.groupsUpdate = handler.groupsUpdate.bind(conn)
        conn.onDelete = handler.deleteUpdate.bind(conn)
    }
    conn.connectionUpdate = connectionUpdate.bind(conn)
    conn.credsUpdate = authState.saveCreds.bind(conn)

    conn.ev.on('messages.upsert', conn.handler)
    conn.ev.on('group-participants.update', conn.participantsUpdate)
    conn.ev.on('groups.update', conn.groupsUpdate)
    conn.ev.on('messages.delete', conn.onDelete)
    conn.ev.on('connection.update', conn.connectionUpdate)
    conn.ev.on('creds.update', conn.credsUpdate)

    conn.isReloadInit = false
    return true

}

/**
 * @this {Socket}
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['connection.update']} update
 */
async function connectionUpdate(update) {
    console.log(update)
    // /** @type {Partial<{ connection: import('@adiwajshing/baileys').ConnectionState['connection'], lastDisconnect: { error: Error | import('@hapi/boom').Boom, date: Date }, isNewLogin: import('@adiwajshing/baileys').ConnectionState['isNewLogin'] }>} */
    const { connection, lastDisconnect, isNewLogin } = update
    if (isNewLogin) this.isInit = true
    // @ts-ignore
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    if (code && code !== DisconnectReason.loggedOut && this?.ws.readyState !== ws.CONNECTING) {
        console.log(await reload(this, true).catch(console.error))
        global.timestamp.connect = new Date
    }
    if (connection == 'open') console.log('- opened connection -')


    if (db.data == null) loadDatabase()
    
    if (update.receivedPendingNotifications) {
    this.sendHydrated(`5212411719888@s.whatsapp.net`, `𝙷𝙾𝙻𝙰 𝚈𝙾𝚅𝙰𝙽𝙸, 𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝚀𝚄𝙴 𝙴𝚂𝚃𝙴 𝙽𝚄𝙼𝙴𝚁𝙾 𝙴𝚂 𝚄𝙽 𝙽𝚄𝙴𝚅𝙾 𝙱𝙾𝚃 𝙰𝙲𝚃𝙸𝚅𝙾 ✅`, global.author, global.imagen2, null, null, null, null, [['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '#owner'], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '#menu']])
    this.groupAcceptInvite('CaBmjQLedZiId1a8wqdHpP')
    }
}

const conn = start().catch(console.error)

export default {
    start,
    reload,
    conn,
    conns,
    connectionOptions,
    authFolder,
    storeFile,
    authState,
    store
}