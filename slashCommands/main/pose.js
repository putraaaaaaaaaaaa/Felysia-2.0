const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "pose",
  description: "make u OC cool bro, don't just stand up there",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Superhero Pose')
      .setImage('https://i.imgur.com/5JedzeN.png')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('Sword Fighting')
      .setImage('https://i.imgur.com/x3pkWky.png')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Dodge Pose')
      .setImage('https://imgur.com/ZszLqEG.png')
      .setColor('Random')

    const embed4 = new EmbedBuilder()
      .setTitle('Superhero Pose')
      .setImage('https://imgur.com/6ckHWbi.png')
      .setColor('Random')

    const embed5 = new EmbedBuilder()
      .setTitle('Easy Pose')
      .setImage('https://imgur.com/NDNr7Zo.png')
      .setColor('Random')

    const embed6 = new EmbedBuilder()
      .setTitle('Sword Pose')
      .setImage('https://imgur.com/5GwrOSd.png')
      .setColor('Random')

    const embed7 = new EmbedBuilder()
      .setTitle('Jujutsu')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650644329537637/FB_IMG_1646723120294.jpg')
      .setColor('Random')

    const embed8 = new EmbedBuilder()
      .setTitle('Nobara')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650644560220170/FB_IMG_1646723118019.jpg')
      .setColor('Random')

    const embed9 = new EmbedBuilder()
      .setTitle('Pose')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650643541004308/FB_IMG_1646723157182.jpg')
      .setColor('Random')

    const pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9
]


    const buttons = [{
      label: 'Previous',
      emoji: '<:kiri:886854576303665202>',
      style: ButtonStyle.Secondary
    },
      {
        label: 'Next',
        emoji: '<:kanan:886854524562722857>',
        style: ButtonStyle.Secondary
      },
    ]

    new Pagination()
    .setCommand(interaction)
    .setPages(pages)
    .setButtons(buttons)
    .setPaginationCollector({
      timeout: 120000
    })
    .setSelectMenu({
      enable: true
    })
    .setFooter({
      enable: true
    })
    .send();
  }
}
