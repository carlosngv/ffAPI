import { Router } from "express"
import { CharacterDataSourceImpl } from "../../infrastructure/datasources/character.implementation.datasource";
import { CharacterRepositoryImpl } from "../../infrastructure/repositories/character.implementation.repository";
import { CharactersController } from "./controller";


export class CharactersRouter {

    static get routes() {
        const charactersRouter = Router();

        const datasource = new CharacterDataSourceImpl();
        const respository = new CharacterRepositoryImpl( datasource );

        const controller = new CharactersController( respository );

        charactersRouter.get( '/', controller.getAll );
        charactersRouter.post( '/', controller.create );
        charactersRouter.put( '/:id', controller.update );
        charactersRouter.get( '/:id', controller.getById );

        return charactersRouter;
    }

}
