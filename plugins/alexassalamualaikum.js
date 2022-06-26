import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = ''./media/WhatsApp-Audio-2021-03-02-at-20.46.15.opus'
conn.sendFile(m.chat, vn, 'WhatsApp-Audio-2021-03-02-at-20.46.15.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum']
handler.tags = ['sound']
handler.command = /^(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)$/i
handler.fail = null
handler.exp = 100
export default handler