const Binance = require("node-binance-api");

const binance = new Binance().options({
    APIKEY: `${process.env.BINANCE_API_KEY}`,
    APISECRET: `${process.env.BINANECE_SECRET_KEY}`,
  });

  export const getLatestPrice = async (coin: string) => {
        const ticker = await binance.prices(coin);
        return ticker
  }

  