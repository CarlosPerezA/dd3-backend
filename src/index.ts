import express from 'express';
import routerApp from './routes/index';
import boomErrorHandler from './middlewares/error.handler';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routerApp(app);
app.use(boomErrorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port: :${PORT}`);
})
