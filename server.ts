import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UserDao from "./daos/UserDao";
import TuitDao from "./daos/TuitDao";
import User from "./models/User";
const app = express();

mongoose.connect('mongodb://localhost:27017/tuiter-db');

app.use(bodyParser.json())

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World A B C D!'));

app.get('/hello1', (req: Request, res: Response) =>
    res.send('Hello World!'));


app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const userDao: UserDao = new UserDao();
const userController: UserController = new UserController(app, userDao);

const tuitDao: TuitDao = new TuitDao();
const tuitController: TuitController = new TuitController(app, tuitDao);
// const userController = UserController.getInstance(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);
