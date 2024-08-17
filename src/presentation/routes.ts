import { Router } from 'express';

export class AppRouter {

    static get routes(): Router {

        const appRouter = Router();

        appRouter.get('/api', ( req, res ) => {
            res.status(200).json({
                msg: 'Welcome to the API!',
            });
        });

        // appRouter.use('/api/games', ); // ? Specific routes

        return appRouter;
    }

}
