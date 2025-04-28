import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Simple email contact form handling
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to handle contact form submissions
  app.post("/api/contact", (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      if (!validateEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // In a real application, you would save this to a database or send an email
      // Here we'll just return a success response
      
      return res.status(200).json({ 
        message: "Message received! Thank you for contacting me.",
        success: true
      });
    } catch (error) {
      console.error("Error handling contact form:", error);
      return res.status(500).json({ message: "Server error, please try again later" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
