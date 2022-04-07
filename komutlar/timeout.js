module.exports = {
  name: "timeout",
  code: `
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | \`$userTag[$authorID]\` İsimli Yetkili \`$userTag[$mentioned[1]\` İsimli Kullanıcıya \`$noMentionMessage\` Süresine Kadar Mute Attım.**]
$timeOutMember[$guildID;$mentioned[1];$noMentionMessage]
$onlyPerms[ban;**$customEmoji[emoji_71] | Bunun \`İçin Üyeleri Banla\` İznin Olmalı**]
$suppressErrors
`,
}