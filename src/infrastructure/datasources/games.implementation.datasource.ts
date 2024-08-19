import { GameModel } from "../../data/mongo/models/game";
import { GamesDataSource } from "../../domain/datasources/games.datasource";
import { CreateGameDto } from "../../domain/dtos/games/create-game.dto";
import { UpdateGameDto } from "../../domain/dtos/games/update-game.dto";
import { GameEntity } from "../../domain/entities/game.entity";

export class GameDataSourceImpl implements GamesDataSource {

    // ? Acá se implementa toda la lógica para realizar acciones en base de datos

    async create(createGameDto: CreateGameDto): Promise<GameEntity> {

        const newGame = new GameModel( createGameDto );
        await newGame.save();

        return GameEntity.fromObject( newGame );
    }

    async update(updateGameDto: UpdateGameDto): Promise<GameEntity> {
        const id = updateGameDto.id;

        const query = { _id: id };

        try {

            const game =  this.findById( id );

            if( !game ) throw `Game with id ${id} not found`;

            const gameUpdated = await GameModel.findOneAndUpdate( query, updateGameDto!.values ).exec();

            return GameEntity.fromObject( gameUpdated! );

        } catch( error ) {
            throw `Game with id ${id} not found`;
        }
    }

    async getAll(): Promise<GameEntity[]> {
        const games = await GameModel.find();
        return games.map( game => GameEntity.fromObject( game ) );
    }

    async findById( id: string ): Promise<GameEntity> {
        const query = { _id: id };

        try {
            const game = await GameModel.findOne( query );

            if( !game ) throw `Game with id ${id} not found`;

            return GameEntity.fromObject( game! );

        } catch( error ) {
            throw `Game with id ${id} not found`;
        }
    }

}
