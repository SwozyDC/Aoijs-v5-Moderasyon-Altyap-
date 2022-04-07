module.exports = {
  name: "sil",
  code: `
$deleteIn[5s]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**$customEmoji[emoji_70] | <@$authorID> Başarıyla \`$message[1]\` Tane Mesaj Silindi**]
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$authorID]]
$clear[$message[1]]
$onlyIf[$message[1]<101;**$customEmoji[emoji_71] | 100'den Fazla Mesaj Silemiyorum Maalesef**]
$onlyIf[$isNumber[$message[1]]==true;**$customEmoji[emoji_71] | Girdiğin rakam bir sayı değil**]
$onlyIf[$message[1]!=;**$customEmoji[emoji_71] | Kaç mesaj silmeliyim bunu tüm gün düşünücem**]
$onlyPerms[managemessages;**$customEmoji[emoji_71] | Bu Komutu Kullanman İçin \`Mesajları Yönet\` İznine Sahip Olman Gerek**]
$onlyBotPerms[managemessages; **$customEmoji[emoji_71] | Kullanman İçin Bana \`Mesajları Yönet İzni\` Vermelisin**]
$cooldown[10s;**$customEmoji[emoji_71] | <@$authorID> Yavaş Ol Kanka Bunu Kullanmak İçin 10 Saniye Beklemelisin**]
$suppressErrors[1;**$customEmoji[emoji_71] | Bi Miktar Girmelisin**]
$deletecommand
`,
};