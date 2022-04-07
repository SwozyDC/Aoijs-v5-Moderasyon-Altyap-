module.exports = {
  name: "unban",
  code: `
$author[1;$userTag[$message[1];$userAvatar[$message[1]]]]
$color[1;RANDOM]
$unban[$message[1]]
$description[1;**<:emoji_70:917309183341236244> | \`$userTag[$message[1]]\` İsimli Kullanıcın Banı Başarıyla Kaldırıldı**]
$onlyIf[$message[1]!=;**$customEmoji[emoji_71] | Bir Kullanıcı ID'si Girmelisin**] 
$onlyIf[$isBanned[$message[1];$guildID]==true;**$customEmoji[emoji_71] | Bu Kullanıcı Yasaklı Değil**]
$onlyPerms[ban;**<:emoji_71:917309220687314966> | Bu Komutu Kullanamazsın Kullanmak İçin \`Üyeleri Banla\` Yetkin Olmalı**]
$onlyBotPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanmam İçin \`Üyeleri Banla\` Yetkim Olmalı]
$suppressErrors[1;**<:emoji_71:917309220687314966> | Bir Kullanıcı ID'si Girmelisin**]
`,
};