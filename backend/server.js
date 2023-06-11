const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});
app.post("/storytime", (req, res) => {
  res.json([
    {
      img: "blob:https://huggingface.co/d786d5b1-26e1-48a8-aef1-a6302af4a2bf",
      prompt1: "p1",
      prompt2: "p2",
      prompt3: "p3",
      story: "story",
    },
  ]);
});

// app.post()  for python backend

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port:${PORT}`));
