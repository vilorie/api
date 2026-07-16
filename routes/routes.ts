import type { Express } from "express";
import type { HandlerFn } from "../types"

interface Handlers {
  Create: HandlerFn
  Search: HandlerFn
  Update: HandlerFn
  Delete: HandlerFn
}

export function routes(app: Express, handlers: Handlers) {
  app.get("/home", handlers.Search);
  app.post("/home", handlers.Create)
  app.put("/home", handlers.Update)
  app.delete("/home", handlers.Delete)
}
