const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "colouring",
  description: "anything about colouring",

  run: async (client, interaction) => {

    const embed1 = new EmbedBuilder()
      .setTitle('Upper Body')
      .setImage('https://imgur.com/QiFxQqf.png')


    const embed2 = new EmbedBuilder()
      .setTitle('Eyes Colouring')
      .setImage('https://imgur.com/1pKF9QC.png')

    const embed3 = new EmbedBuilder()
      .setTitle('Full Body')
      .setImage('https://imgur.com/YeAm2IB.png')

    const embed4 = new EmbedBuilder()
      .setTitle('Beach Suit')
      .setImage('https://imgur.com/VQXi90u.png')

    const embed5 = new EmbedBuilder()
      .setTitle('Skirt')
      .setImage('https://imgur.com/YUPjrlA.png')

    const embed6 = new EmbedBuilder()
      .setTitle('Skirt')
      .setImage('https://imgur.com/4eGq4xh.png')

    const embed7 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/ZgA5cLF.png')

    const embed8 = new EmbedBuilder()
      .setTitle('Ambient Style')
      .setImage('https://imgur.com/0WQwtZ8.png')

    const embed9 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/t6pJlKZ.png')

    const embed10 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/GZghnQp.png')

    const embed11 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/WSTKBQK.png')

    const embed12 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/ueBbk8U.png')

    const embed13 = new EmbedBuilder()
      .setTitle('Ambient')
      .setImage('https://imgur.com/4Zr74A4.png')

    const embed14 = new EmbedBuilder()
      .setTitle('Body')
      .setImage('https://imgur.com/x4wNnIq.png')

    const embed15 = new EmbedBuilder()
      .setTitle('Hair')
      .setImage('https://imgur.com/U6Od9Em.png')

    const embed16 = new EmbedBuilder()
      .setTitle('Head')
      .setImage('https://imgur.com/hQDVK18.png')

    const embed17 = new EmbedBuilder()
      .setTitle('Dramatic Shading')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147893031149599/FB_IMG_16470798596351693.jpg')

    const embed18 = new EmbedBuilder()
      .setTitle('Shading')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147893303775242/FB_IMG_16470798549526466.jpg')

    const embed19 = new EmbedBuilder()
      .setTitle('Skin Tone')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147893597397003/FB_IMG_16470798508819829.jpg')

    const embed20 = new EmbedBuilder()
      .setTitle('Skin Paint')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147969069695006/FB_IMG_16470798430711036.jpg')

    const embed21 = new EmbedBuilder()
      .setTitle('Normal')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147970571247616/FB_IMG_16470797639413880.jpg')

    const embed22 = new EmbedBuilder()
      .setTitle('Shading')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147970789355550/FB_IMG_16470797606154918.jpg')

    const embed23 = new EmbedBuilder()
      .setTitle('Simple shading')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952147970978091069/FB_IMG_16470797578289620.jpg')

    const embed24 = new EmbedBuilder()
      .setTitle('Advance to Shading')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148033200607292/FB_IMG_16470797517219353.jpg')

    const embed25 = new EmbedBuilder()
      .setTitle('Tone')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148033519353926/FB_IMG_16470797484084714.jpg')

    const embed26 = new EmbedBuilder()
      .setTitle('Eye Shading')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148181070782524/FB_IMG_16470796174259091.jpg')


    const pages = [
      embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15, embed16, embed17, embed18, embed19, embed20, embed21, embed22, embed23, embed24, embed25, embed26
      ]


    buttonPages(interaction, pages)

  }
}