import * as fs from "fs";

export default function getBlogs(req, res) {
  console.log(req.query.slug);
  fs.readFile(`blogData/${req.query.slug}`, "utf-8", (err, data) => {
    if (err) {
      return res.json({ error: "Invalid address" });
    }
    return res.json(JSON.parse(data));
  });
}
