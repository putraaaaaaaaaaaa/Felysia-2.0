const Pagination = require('customizable-discordjs-pagination');
const {
  ButtonStyle,
  EmbedBuilder
} = require('discord.js');

module.exports = {
  name: "anatomy",
  description: "Anatomy is important, c'mon guys",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Body')
      .setImage('https://imgur.com/z4ty1Ns.png')
      .setColor('Random')

    const embed2 = new EmbedBuilder()
      .setTitle('chest')
      .setImage('https://imgur.com/YpNm4HW.png')
      .setColor('Random')

    const embed3 = new EmbedBuilder()
      .setTitle('Body')
      .setImage('https://imgur.com/p0NucyF.png')
      .setColor('Random')

    const embed4 = new EmbedBuilder()
      .setTitle('Fingers')
      .setImage('https://imgur.com/LMamQKf.png')
      .setColor('Random')

    const embed5 = new EmbedBuilder()
      .setTitle('Legs')
      .setImage('https://imgur.com/p5gCmxB.png')
      .setColor('Random')

    const embed6 = new EmbedBuilder()
      .setTitle('thigh')
      .setImage('https://imgur.com/LONzLBC.png')
      .setColor('Random')

    const embed7 = new EmbedBuilder()
      .setTitle('How to appls 1 pose to all ages')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650644086288394/FB_IMG_1646723128997.jpg')
      .setColor('Random')

    const embed8 = new EmbedBuilder()
      .setTitle('POV')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/950650367681634304/FB_IMG_1646723073220.jpg')
      .setColor('Random')

    const embed9 = new EmbedBuilder()
      .setTitle('How to guitar spanyol')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147890913050664/FB_IMG_16470799063845071.jpg')
      .setColor('Random')

    const embed10 = new EmbedBuilder()
      .setTitle('Another guitar spanyol')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147891215028274/FB_IMG_16470799011012204.jpg')
      .setColor('Random')

    const embed11 = new EmbedBuilder()
      .setTitle('Adjust you breast')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147891529609216/FB_IMG_16470798939308437.jpg')
      .setColor('Random')

    const embed12 = new EmbedBuilder()
      .setTitle('Neck')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147891823214592/FB_IMG_16470798830105981.jpg')
      .setColor('Random')

    const embed13 = new EmbedBuilder()
      .setTitle('Down part head')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147892217466900/FB_IMG_16470798791333880.jpg')
      .setColor('Random')

    const embed14 = new EmbedBuilder()
      .setTitle('Neck')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147892674654259/FB_IMG_16470798759717527.jpg')
      .setColor('Random')

    const embed15 = new EmbedBuilder()
      .setTitle('Triangle Consept in Face')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147969883406336/FB_IMG_16470798163282345.jpg')
      .setColor('Random')

    const embed16 = new EmbedBuilder()
      .setTitle('Pose')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148039655637002/FB_IMG_16470797041052432.jpg')
      .setColor('Random')

    const embed17 = new EmbedBuilder()
      .setTitle('Ninja')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148039915679764/FB_IMG_16470797004224068.jpg')
      .setColor('Random')


    const pages = [
        embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15, embed16, embed17];

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