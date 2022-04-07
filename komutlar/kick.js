module.exports = {
  name: "kick",
  code: `
$author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]
$kick[$mentioned[1];$guildID;1;$noMentionMessage]
$color[1;RANDOM]
$description[1;
<:emoji_70:917309183341236244> | \`$userTag[$mentioned[1]] \` İsimli Kullanıcı \`$noMentionMessage\` Sebebinden Sunucudan Atıldı]
$onlyPerms[kick;{description:<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin \`Üyeleri At\` İznin Olmalı}{color:RANDOM}
$suppressErrors[1;{newEmbed:{description:<:emoji_71:917309220687314966> | Bir Üye Etiketlemelisin Dostum}{color:RANDOM}}]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz 
`,
};
