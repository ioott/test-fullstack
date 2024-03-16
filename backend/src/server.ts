import * as express from 'express';
import routes from './routers/routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor iniciado. Acesse em localhost:${port}`);
});
