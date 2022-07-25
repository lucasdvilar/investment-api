import dotenv from 'dotenv';
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.send('Hi, there!');
})

app.listen(PORT, () => console.log(`Running on ${PORT}`)
);
