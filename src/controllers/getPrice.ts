import { Request, Response, NextFunction } from "express";
import sendEmail from "../utils/sendEmail"
import { getLatestPrice } from "./../api/index";

export const getCoinPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, price, coin, condition } = req.body;

    const ticker = await getLatestPrice(coin);

    let current_price = Number(ticker[coin]);

    if (Number(price) < current_price) {
      return res.send({
        success: false,
        error: "Price is less than coin value",
        status: 400,
      });
    }
    // await sendEmail({email, subject: "Binance Test Email", message:`The current coin value is ${coin}` })
    res
    .status(200)
    .send({ success: true, msg: `An email has been sent to ${email}` });

   
  } catch (error) {
    res.status(500).send(error.toString());
  }
};
