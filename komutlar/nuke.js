module.exports = {
  name: "nuke",
  code: ` 
 $deleteChannels[$channelID]
 $cloneChannel[$channelID]
$onlyPerms[managemessages;]
$onlyIf[$getGlobalUserVar[kl;$authorID]!=true;\`$getGlobalUserVar[ksebep;$authorID]\` sebebinden karalistedesiniz.] 
`,
};
