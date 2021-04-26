import express from "express";
import { getCoinPrice } from "./../controllers/getPrice";

const router = express.Router();

router.route("/get_current_price").post(getCoinPrice);

export default router;
