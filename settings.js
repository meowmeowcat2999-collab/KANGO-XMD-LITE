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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pqMFQ2RGZTclI5dlptZVJRTHRIUyswckpzMGN4R0xTd24yMHdrZ0ZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVJyUks5bTc5QVdLbTN0dDEyakhla0RsTUlUWkc4d3lsNnBQYmp2dnozaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS1prZ2YvVXBNbzExdGxML0VXaHpoaFNicHdUVEVOZjF3d0JDN1VobkhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZzJXNWEvVTZuOFYrQ1RDMDhidlR5eTJuK1ZVZWFhdXdPWjJxQnk5MHkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNR05ybEVhS2JlcHJBOEZMaE1iSG4yaXAwdTUwOXFqRS9hRkU5Z0VkMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkswMDNVUmNlN0JwSXNscWNjUU5GWEFPOFFDcEZ2bnE4N1hzWmd4R0g0QTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURUQXRtRUlwTVhrZWFTV29XUnZUczM5eGZGeVJCay9vZGlTUlVncWIwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1NGTElubUU3aTVCM3BQQVFLV0pob1JqYWdlbWRBNzZoMkxtUzJnOVVVYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlROQW5vaGEwam4vakc0Y1BDZHRBSWpMZDltS2o1UnZpM1k1ZnpXazFRLytxb3gwb0NGODYzaXVXYVRSNk5BVUhSNW45Y05sUk0xcVM1dXpESVFYd2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQzLCJhZHZTZWNyZXRLZXkiOiJkMTIyVXRaNmVZdzJtOUJJYmRXOEZVQ2VqUEFqUVcrS3VzVlkraVlGQ29JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODE2LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODE2LCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllUUFkyRkhRIiwibWUiOnsiaWQiOiI5MTYyMzgzODYzODA6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2XrSAg8J2XmCAg8J2XpSAg8J2XoiIsImxpZCI6IjQ0MTk5NDA3OTg0Nzg6MThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJLy92N1lGRUx2azVNb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkNmcvZlZaV3JvMkZ4Mk9PNDZwTVlZVFRyREJGb25EbXhISytMbkg1S0ZnPSIsImFjY291bnRTaWduYXR1cmUiOiJQS0dMSWZUTzZubEJiM2V2a1ZrRmRLdDcwbTFLWkJtV2hjdDIvaGVIdFdhODRZT3IycjBuNlRkMkoxYXh6WnhmR0xmSGVqVlhKamtPNndXQ2lRRTlBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNGpyZGRtdTBWUWhsN3U1VXBDNktBNkZDRWFQVnNGeG9HeThibUV4dVhkTHY1dVpCa2EyQVlEczhYUG1jeXpDTC9xRDE5Wkc1MlI0eVpMWVZISE9paUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0NDE5OTQwNzk4NDc4OjE4QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZW9QMzFXVnE2TmhjZGpqdU9xVEdHRTA2d3dSYUp3NXNSeXZpNXgrU2hZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRFFnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Njc0NTMyNTYsImxhc3RQcm9wSGFzaCI6IjRaUlA2UyJ9' 
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

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

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
