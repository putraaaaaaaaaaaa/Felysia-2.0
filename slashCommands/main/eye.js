const { EmbedBuilder } = require("discord.js");
const buttonPages = require("../../functions/pagination");

module.exports = {
  name: "eye",
  description: "there's is no among us, i swear",

  run: async (client, interaction) => {


    const embed1 = new EmbedBuilder()
      .setTitle('Hot eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148039240417290/FB_IMG_16470797148094012.jpg')



    const embed2 = new EmbedBuilder()
      .setTitle('Pretty eye')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148118131048458/FB_IMG_16470796745823699.jpg')



    const embed3 = new EmbedBuilder()
      .setTitle('Eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148118407876628/FB_IMG_16470796718245482.jpg')



    const embed4 = new EmbedBuilder()
      .setTitle('Anime eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148118709886986/FB_IMG_16470796664722964.jpg')



    const embed5 = new EmbedBuilder()
      .setTitle('Advance draw eye')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148118944751616/FB_IMG_16470796620173857.jpg')



    const embed6 = new EmbedBuilder()
      .setTitle('Anime eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148119326429184/FB_IMG_16470796585209858.jpg')



    const embed7 = new EmbedBuilder()
      .setTitle('Cartoon')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148119808786452/FB_IMG_16470796546759296.jpg')



    const embed8 = new EmbedBuilder()
      .setTitle('Eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148120043675668/FB_IMG_16470796515258338.jpg')



    const embed9 = new EmbedBuilder()
      .setTitle('Eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148120341467156/FB_IMG_16470796447324377.jpg')



    const embed10 = new EmbedBuilder()
      .setTitle('Different style to colourized')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148120555360266/FB_IMG_16470796249060437.jpg')



    const embed11 = new EmbedBuilder()
      .setTitle('Eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148181460848660/FB_IMG_16470796077063869.jpg')



    const embed12 = new EmbedBuilder()
      .setTitle('Its Eye')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148181729280070/FB_IMG_16470795961906356.jpg')



    const embed13 = new EmbedBuilder()
      .setTitle('Eyes')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148181934825472/FB_IMG_16470795888363937.jpg')



    const embed14 = new EmbedBuilder()
      .setTitle('Expert')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148182148722788/FB_IMG_16470795831348869.jpg')



    const embed15 = new EmbedBuilder()
      .setTitle('Cartoon')
      .setImage('https://media.discordapp.net/attachments/950094766048178197/952148182819807312/FB_IMG_16470795773579566.jpg')



    const pages = [
        embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15
        ]


    buttonPages(interaction, pages)

  }
}