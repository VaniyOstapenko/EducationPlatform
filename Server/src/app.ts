import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import user from './controller/user.controller';
import api from './controller/api.controller';
import course from './controller/course.controller';
import cookieParser from 'cookie-parser';
import lessons from './controller/lessons.controller';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,PATCH',
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', user);
app.use('/api', api);
app.use('/course', course);
app.use('/lessons', lessons);
app.use((error, req: Request, res: Response, next: NextFunction) => {
  res.send(error.message);
});

export default app;
