//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0R2Yk9WOThxdHlGMnBETmNiUHRwUjl3SVB1eWpVWTZ3c241WlhpWDczYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFlndVViVFZlSDZ5Z1Y3L08vNEthQkJvb3ZLQjh5YjAxQjZmRFA0WlRFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSVFZeEJmdGVaN0V0dWkvb1ZQbmUxSEkwa2g1MnNtUUgzcHJoeHB5WTBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnVkcyK0dhV2hCOWpNU2Z3VFM0VWVRYlg5NFhxamtXZE1VS3plTHJrVm5BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFNUjZ6WUVGWFo5VmpFVmt1YmVMOE1RcmFHdVVrQWh1REp6cktkTFZpMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVpbGU2cUdJNFRqc21IeE5KVFZRV3E4Q3JNYmlUM1JnelVxVjhlR25GUk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BvQjRGbGU2ZlIvUGlCMUNFYmh0eFVKT1d6TVZCSHFjTWpWb0p2emlFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNS9KT2JPL0V2Z21ubGtYeDA4UUlWbkpUMWt3WVhoWjRiTi82NUVuOVUwaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9neHBxRFZjVy9PYkIxYWlFRE55blZJOVRNU3ZibktxRkhsSzBDNFE0VEdJOStZeVJuKzdDTy95WlN3aWdXS3FyMzhjVVFVcjRmNlAxd1lBeUNoTGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJhK0l5cmdacTNUR2FpT3JJUVpDdXhncklOeHRBQTNOakRLeGVSM3doc1ZjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZQ0FLeXRPN1JWMnhTbkd2WExYTWpnIiwicGhvbmVJZCI6ImVhNWQ0MjUxLTQwMDctNGI5Mi04ZTJiLTIzYjFlZGRkNzk5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJITWdyNnZRSFNsOU9HK0M3SVNRK0lYZGFYZ0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hJK2VEc1VQdEM0VWxLY1Yrb1YxWDc0T0k0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllUMTI0RU4xIiwibWUiOnsiaWQiOiIyNTQ3NTk4NTA1MjY6NDVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUkFQSEtFKCBUaGVlIEFzc2lzdGFuY2UpIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdmY1SHdRdzZLdXZnWVlFQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuMGE2MFg3ZmpWZGpjemYvVTdqeC9wTHh1dDJSODZyUjJ5cDFxTEd5dnlVPSIsImFjY291bnRTaWduYXR1cmUiOiJLM3kzMU9HUHVUZjlFN2ZTMU1LQ0Nyc2ZsWWZFbkoxT0U3REZheThLdTlaVXYwZTRzYUNRRkVyT2NkOGsxOEpFZzlkcWpYbTI5ZVdpK2pVQ1VUbVBBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia3p3SlFkd3BrdVhhWVdqblNrWmxJeVAxT0hRcGhHbmhrNkVReWx6ajdMdkJ4V0VpRkxuT1ZxcUp0V0hzUjlCQ1lhbHh6M1F3QjJUdlh6cVoyU1MzaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NTk4NTA1MjY6NDVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjlHdXRGKzM0MVhZM00zLzFPNDhmNlM4YnJka2ZPcTBkc3FkYWl4c3I4bCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTM5NDI1N30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
