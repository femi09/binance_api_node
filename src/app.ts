import express from "express";
import cors from "cors"
const app = express();

import getPrice from "./routes/getPrice";


app.use(cors())
app.use(express.json());
app.use("/api", getPrice);

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server Listening on port ${port}`));
