import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client if key is available
const aiKey = process.env.GEMINI_API_KEY;
const ai = aiKey ? new GoogleGenAI({ apiKey: aiKey }) : null;

// AI Stylist Chat endpoint
app.post("/api/ai-stylist", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!ai) {
      return res.status(500).json({ error: "Gemini API key not configured on server." });
    }

    const prompt = `You are VellyBro AI, the expert fashion stylist and advisor for the premium clothing brand "FashionVellyBro". 
Our brand is known for modern streetwear, luxury jackets, sleek hoodies, tailored formal wear, and high-end accessories with a bold Black, Red, and White color palette.
Respond to the customer in a stylish, professional, helpful, and concise manner. Give concrete outfit suggestions, styling tips, or color coordination advice.

Customer message: ${message}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({ reply: response.text || "Hello from FashionVellyBro AI! How can I style your look today?" });
  } catch (error: any) {
    console.error("AI Stylist Error:", error);
    res.status(500).json({ error: error.message || "Failed to generate styling advice." });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", brand: "FashionVellyBro" });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`FashionVellyBro server running on http://localhost:${PORT}`);
  });
}

startServer();
