import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API development in progress');
})

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`)
})