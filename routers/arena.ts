import { Router } from "express";

export const arenaRouter = Router();

arenaRouter
  .get("/fight-form", (req, res) => {
    res.send("Formularz walki");
  })
  .post("/fight", (req, res) => {
    res.send("Przeprowadzenie walki");
  });
