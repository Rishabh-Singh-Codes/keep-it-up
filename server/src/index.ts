import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname , "../../client/out")));

app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(8080, () => {
  console.log("app running on port 8080");
});
