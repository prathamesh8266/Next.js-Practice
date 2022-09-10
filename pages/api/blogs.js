// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default async function handler(req, res) {
  const files = await fs.promises.readdir("blogData");
  const endData = [];
  for (let i = 0; i < files.length; i++) {
    const data = await fs.promises.readFile(`blogData/${files[i]}`, "utf-8");
    endData.push(JSON.parse(data));
  }
  return res.json(endData);
}
