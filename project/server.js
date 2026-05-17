require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/review", async (req, res) => {

  const { code, language } = req.body;

  // Fake AI response for now
  // You can later connect Gemini/OpenAI safely here

  res.json({
    security: 82,
    performance: 74,
    quality: 88,

    findings: [
      {
        type: "quality",
        title: "Code Readability",
        description:
          "Consider splitting large functions into smaller reusable modules.",
        severity: "low"
      }
    ]
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});