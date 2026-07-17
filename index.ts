import express from "express";
import { routes } from "./routes/routes";
import { dataCreate, searchData,  } from "./handlers";

const app = express()

app.use(express.json())

routes(app, {
  Search: searchData,
  Create: dataCreate,
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})