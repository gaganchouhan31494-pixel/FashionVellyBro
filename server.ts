import express from "express";
import { createServer as createHttpServer } from "http";
import fs from "fs/promises";
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
  const httpServer = createHttpServer(app);

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        // The preview proxy cannot forward Vite's custom WebSocket server.
        // Disable HMR so the injected Vite client does not repeatedly reconnect.
        hmr: false,
      },
      appType: "spa",
    });

    // The preview proxy cannot carry Vite's HMR socket. Keep the Vite client
    // route unavailable as a final guard against stale or injected HTML trying
    // to open a connection that this server cannot expose.
    app.get("/@vite/client", (_req, res) => {
      res.status(404).end();
    });

    // Serve the entry document without the injected client so it does not try
    // to reconnect endlessly through the preview proxy.
    app.use(async (req, res, next) => {
      if (
        req.method !== "GET" ||
        req.path.startsWith("/api/") ||
        req.path.startsWith("/@vite/") ||
        path.extname(req.path)
      ) {
        return next();
      }

      try {
        const indexHtml = await fs.readFile(path.join(process.cwd(), "index.html"), "utf8");
        // Serve the entry document without Vite's dev client. The preview proxy
        // cannot establish Vite's HMR WebSocket connection.
        const previewHtml = indexHtml.replace(
          /<script[^>]+src=["']\/@vite\/client["'][^>]*><\/script>\s*/g,
          "",
        );
        res.status(200).type("html").send(previewHtml);
      } catch (error) {
        next(error);
      }
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`FashionVellyBro server running on http://localhost:${PORT}`);
  });
}

startServer();
