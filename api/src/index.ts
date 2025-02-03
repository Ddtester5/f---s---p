import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/qwe", (req: Request, res: Response) => {
  res.send("qwe");
});

app.listen("3000", () => {
  console.log("Serever start at 3000 port");
});
