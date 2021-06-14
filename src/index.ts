import dotenv from "dotenv";
import app from "./app";
dotenv.config();

// Here we init the server

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
