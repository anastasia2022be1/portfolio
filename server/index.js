import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

app.get("/health", (req, res) => {
  res.status(200).json({ success: true, message: "OK" });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields." });
  }

  const text = [
    "New portfolio message:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Message: ${message}`,
  ].join("\n");

  res.status(202).json({ success: true, message: "Message accepted" });

  axios
    .post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text,
      },
      {
        timeout: 10000,
      },
    )
    .catch((error) => {
      if (error.response) {
        console.error("Telegram API error:", error.response.data);
      } else {
        console.error("Unknown error:", error.message);
      }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
