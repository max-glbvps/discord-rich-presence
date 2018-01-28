if (process.version.slice(1).split('.')[0] < 8) throw new Error('Node 8.0.0 or higher is required. Update Node on your system.');
const config = require("./config.json");
const client = require("discord-rich-presence")(config.clientid)
const moment = require("moment")
const parse = require("parse-duration")

client.updatePresence({
 name: config.application_name,
 details: config.middle_msg,
 state: config.last_msg,
 startTimestamp: moment(new Date()).add(parse("-0s"), "ms").toDate(),
 largeImageKey: config.large_image,
 largeImageText: config.large_image_text,
 smallImageKey: config.small_image,
 smallImageText: config.small_image_text,
 instance: true,
 });
