import { Router } from "express";
import { GamesController } from "./controller";
import { GamesRepositoryImpl } from "../../infrastructure/repositories/games.implementation.repository";
import { GameDataSourceImpl } from "../../infrastructure/datasources/games.implementation.datasource";


export class GamesRouter {

    static get routes(): Router {
        const gamesRouter = Router();

        const datasource = new GameDataSourceImpl();
        const respository = new GamesRepositoryImpl( datasource );

        const controller = new GamesController( respository );

        gamesRouter.get( '/', controller.getAll );
        gamesRouter.post( '/', controller.create );
        gamesRouter.put( '/:id', controller.update );
        gamesRouter.get( '/:id', controller.getById );

        return gamesRouter;

    }

}
