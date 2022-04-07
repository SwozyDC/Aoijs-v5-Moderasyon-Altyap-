module.exports = {
  name: "force-ban",
  code: `
  $ban[$message[1];$guildID;1;$message[2]]
  $author[1;$userTag[$authorID];$userAvatar[$authorID]]
  $thumbnail[1;$userAvatar[$message[1]]]
  $description[1;
  <:emoji_70:917309183341236244> | \`$userTag[$message[1]]\` **İsimli Kullanıcı \`$message[2]\` Sebebinden Başarıyla Banlandı ^^**]
  $footer[1;Kullanıcı ID'si : $message[1];$userAvatar[$message[1]]]
  $onlyPerms[ban;{newEmbed:{description:<:emoji_71:917309220687314966> | \`$userTag[$authorID]\` Bunu Kullanmak İçin \`Üyeleri Banla İznin\` Olmalı}{color:RANDOM}}]
   $suppressErrors[1;{newEmbed:{description:<:emoji_71:917309220687314966> | Bir Kullanıcı ID'si Girmelisin Dostum}{color:RANDOM}}]

  `,
};