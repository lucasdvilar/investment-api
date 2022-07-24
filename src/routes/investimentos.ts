import { Router } from "express";

const router = Router();

router.post('/comprar', (req, res) => {
  console.log(req.body);
  res.send('test')
});

export default router;
