import express from 'express';
import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';
import ordersRouter from './routers/orders.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use(productsRouter);
app.use(usersRouter);
app.use(ordersRouter);
app.use(loginRouter);

export default app;