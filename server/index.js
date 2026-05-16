import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const text = `
📨 New message:

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text,
    }, {
      timeout: 10000,
    });

    res.status(200).json({ success: true, message: "Message send" });
  } catch (error) {
    if (error.response) {
        console.error("Telegram API error:", error.response.data);
      } else {
        console.error("Unknown error:", error.message);
      }
    
      res.status(500).json({ success: false, message: "Error sending." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});
