const axios = require("axios");

const SYSTRAN_API_KEY = process.env.SYSTRAN_API_KEY;
const SYSTRAN_API_URL =
  "https://api-platform.systran.net/translation/text/translate";

async function translateText(text, sourceLang, targetLang) {
  try {
    const response = await axios.get(SYSTRAN_API_URL, {
      params: {
        key: SYSTRAN_API_KEY,
        input: text,
        source: sourceLang,
        target: targetLang,
      },
    });
    return response.data.outputs[0].output;
  } catch (error) {
    console.error("Error translating text:", error.message);
    throw error;
  }
}

module.exports = { translateText };
