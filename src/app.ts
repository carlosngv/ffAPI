import { envs } from "./config/envs";
import { MongoDatabase } from "./data/mongo";
import { AppRouter } from "./presentation/routes";
import { Server } from "./presentation/server";


( () => {
    main();
} )()


function main() {

    MongoDatabase.connect( {
        mongoUrl: envs.MONGO_URL,
        dbName: envs.DB_NAME,
    } );

    const options = {
        port: envs.PORT,
        routes: AppRouter.routes,
    }

    const server = new Server( options );

    server.start();
}
