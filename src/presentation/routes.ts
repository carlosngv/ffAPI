import { Router } from 'express';
import { GamesRouter } from './games/routes';
import { CharactersRouter } from './characters/routes';

export class AppRouter {

    static get routes(): Router {

        const appRouter = Router();

        appRouter.get('/api', ( req, res ) => {
            res.status(200).json({
                msg: 'Welcome to the API!',
            });
        });

        appRouter.use( '/api/games', GamesRouter.routes ); // ? Specific routes
        appRouter.use( '/api/characters', CharactersRouter.routes ); // ? Specific routes

        return appRouter;
    }

}
