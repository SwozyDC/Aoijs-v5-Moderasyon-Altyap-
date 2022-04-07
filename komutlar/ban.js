module.exports = {
  name: "ban",
  code: `
$author[1;$userTag[$mentioned[1]];$userAvatar[$mentioned[1]]]
$ban[$mentioned[1];$guildID;1;$noMentionMessage]
$description[1;<:emoji_70:917309183341236244> | \`$userTag[$mentioned[1]]\` İsimli Kullanıcı \`$noMentionMessage\` Sebebi İle Banlandı ^^]
$color[1;RANDOM]
$onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID]; **$customEmoji[emoji_71] | Aynı En Yüksek Role Sahip Birini Yasaklayamazsınız**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];**$customEmoji[emoji_71] | Senden Daha Yüksek Bir Role Sahip Birini Yasaklayamazsın**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];**$customEmoji[emoji_71] | Benden Daha Yüksek Rolü Olan Birini Banlayamam**] 
$onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];**$customEmoji[emoji_71] | Benimle Aynı Yüksek Role Sahip Birini Yasaklayamam**]
$onlyIf[$mentioned[1]!=$ownerID;**$customEmoji[emoji_71] | Sunucu Sahibini Yasaklayamazsınız**]
$onlyIf[$mentioned[1]!=$authorID;**$customEmoji[emoji_71] | \`$userTag[$authorID]\` Birini Etiketlemelisin**] 
$onlyIf[$mentioned[1]!=$clientID;:**$customEmoji[emoji_71] | Kendimi Yasaklayamam**]
$onlyIf[$hasPerms[$guildID;$authorID;ban]==true;**$customEmoji[emoji_71] | Bu Komutu Kullanmak İçin \`Üyeleri Banla\` Yetkin Olmalı**] 
$onlyBotPerms[ban;<:emoji_71:917309220687314966> | Bu Komutu Kullanmak İçin Bana \`Üyeleri Banla\` Yetkisi Vermelisin ^^]
$suppressErrors[1;**<:emoji_71:917309220687314966> | Bütün Gün Kimi Banlayacağımı Düşünücem ^^**]

`

};

