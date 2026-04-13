import express from 'express';
import { config } from './config/envs.js';
import issueRoutes from './routes/issue.routes.js'

const app = express();

app.use(express.json());

app.use(`${config.apiPrefix}`, issueRoutes);

app.listen(config.port, () => {
  console.log('Servidor typescript corriendo');
});
