require("dotenv").config(); // remove this line if you are using replit

module.exports = {
    token: process.env.TOKEN || "OTQ5Nzk0MDc2NTg3MzYwMjg3.GxejPQ.4oLRifUS0xqYPCOfzCIRyQNBImhQTfo9awm8Bk", // your bot token
    mongourl: process.env.MONGO_URI || "mongodb+srv://Putra:putra@bam.phk7k.mongodb.net/Vesper", // mongoose connection string
    clientID: process.env.CLIENT_ID || "949794076587360287", // your bot client id
};

// you can choose to fill these parameters in this file or in the env file
