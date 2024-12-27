const { TeamsActivityHandler } = require("botbuilder");
const { translateText } = require("./systranService");

class TranslationBot extends TeamsActivityHandler {
  constructor() {
    super();

    this.onMessage(async (context, next) => {
      console.log("Message added!");
      const userMessage = context.activity.text;
      const sourceLang = "en"; // Set dynamically based on user preference or detection
      const targetLang = "fr"; // Set dynamically or via user configuration

      try {
        const translatedText = await translateText(
          userMessage,
          sourceLang,
          targetLang
        );
        await context.sendActivity(`Translated: ${translatedText}`);
      } catch (error) {
        await context.sendActivity("Sorry, I could not translate the message.");
      }

      await next();
    });

    // this.onTeamsReplyActivity(async (context, next) => {
    //   const replyMessage = context.activity.text;
    //   const sourceLang = "en";
    //   const targetLang = "fr";

    //   try {
    //     const translatedReply = await translateText(
    //       replyMessage,
    //       sourceLang,
    //       targetLang
    //     );
    //     await context.sendActivity(`Translated Reply: ${translatedReply}`);
    //   } catch (error) {
    //     await context.sendActivity("Sorry, I could not translate the reply.");
    //   }

    //   await next();
    // });
  }
}

module.exports.TranslationBot = TranslationBot;
