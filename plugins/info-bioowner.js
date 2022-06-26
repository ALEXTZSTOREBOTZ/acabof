let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Chika-Bot
*✉️ Nama RL* : Alex
*♂️ Gender* : Laki - laki
*✝️ Agama* : KRISTEN
*⏰ Tanggal lahir* : 1 November 2005
*🎨 Umur* : tahun ini 17
*🧮 Kelas* : 11
*🧩 Hobby* : Nonton Animek, Chatting, Recode Script Bot, Ngehasilin Duit
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Medan, Sumatera Utara
*❤️ Suka* : Warnah Merah, Animek, Loli, Waifu, Anj, Lagu Slow, Kucing
*💔 Benci* : Anak Caperrrrrrrrrrrrr Itu Aja Oh Iya Satu Lagi Sok Seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @alextz_store
*🇫  Facebook* : -
*🏮 Chanel Youtube* : ALEX TZ STORE
*🐈 Github:* -

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler