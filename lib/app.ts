import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/Routes';
import * as mongoose from 'mongoose';


class App {
    public app: express.Application; // ???
    public route: Routes = new Routes();
    public mongoUrl: string = 'mongodb://DZhyrov:Qq%40338307614@ds125402.mlab.com:25402/task_manager_node?authSource=task_manager_node&w=1'

    constructor() {
        this.app = express();
        this.config();
        this.route.routes(this.app);
        this.mongoSetup();
    }
    
    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true })
            .then(() => console.log("MongoDB connected"))
            .catch(err => console.log(err));
    } 

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        // support application/x-www-form-urlEncoded post data
        this.app.use(bodyParser.urlencoded({ extended: false })) // ???
    }

}

export default new App().app;