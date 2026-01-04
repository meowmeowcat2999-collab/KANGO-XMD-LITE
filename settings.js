//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZNZVh2K2FJZEtacS9lWnRlTU1NclZZUk9VYVNDTGhoRW5yU3Y4L3hYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWROMHBETTBPWlBkWGNvNDJwNUxNSW43K3IrZlQ4SXJoSWs0dmQrQUkzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q0RLMUlzSmlXZFBQYzJqRCtaclhwSHVKSEF1YzVtTkFRc0ZWNUdvNlZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUWw3ZHhIc0VsZTNsckRhcXJ6L05OODBleFlwcEhqaXRBeG8wTDlpdkE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklFby83OHJLeE1VOWNRMWJST09QV0NvWG5oYmtiWVUrSC9mQk9aR1ZKbjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMwZVFyRjJPZjVmOEx0Q1N6RUVZZGU5UVhsaFZhY1hEeUZtcW4xbW5IWEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpaZzlISEtJNTRVRnFsMmNwNXJ0VU45R25xMGV2aU9FNVJkRnEzazhGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUlSd1V2bWRiR2V5TnVnb2ZDNk53Q3RxV21qUXpZZXlKSEVKWjAvVEdBND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNJOVgyVzFINVVpVjV3czh5emtmMzdXY0RaQnFKbFY3cFhmZElmN1QxMVJEUlRGZGFTaXorYXU0M3lqdWhldGNRdGxIbkNuN3krK2F6b3VuRUlxT0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTcsImFkdlNlY3JldEtleSI6IkhTdUJJWTNhWmxod1Z3d1B6VERJQ2tXa0N0bmFwMWNGZFRoMnUvdG02ZWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTQsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU0Y4TFo1WEIiLCJtZSI6eyJpZCI6IjkxNjIzODM4NjM4MDoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZetICDwnZeYICDwnZelICDwnZeiIiwibGlkIjoiNDQxOTk0MDc5ODQ3ODoxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEL3Y3WUZFSis2Nk1vR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImQ2Zy9mVlpXcm8yRngyT080NnBNWVlUVHJEQkZvbkRteEhLK0xuSDVLRmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImIwUVpYUGM0a3A1LzBCeUtBWTBNd2I0Y1RrdlNWdDZTK0hYdjJpQjFFdDJtVU95OUlLcnFOWkNETm85UVJoa1NDMGhXS1YvTWprd1VGa1ZsNDFLMENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNREZiTmtTYU8waGtLSmg0UTVITFVrZHZSbFR1VmRiWHN5OHFmQVBaRGRnSEp6VThFd2VIMmYxYU1VN25Ib1BQaXMrRzM2SjFwTEFtaDlIbHE3aXhEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ0MTk5NDA3OTg0Nzg6MTlAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhlb1AzMVdWcTZOaGNkamp1T3FUR0dFMDZ3d1JhSnc1c1J5dmk1eCtTaFkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlEUWdJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzUxMzM4OSwibGFzdFByb3BIYXNoIjoiNFpSUDZTIn0=' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "anandhu" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "anandhu" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
