import * as express from "express";
import * as cors from "cors";
import helmet from "helmet";
import router from "./routers/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (_req, res) => res.status(200).json({ message: 'API is running' }));

app.use(router);

export default app;