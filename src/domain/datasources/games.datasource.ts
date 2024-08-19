import { CreateGameDto } from "../dtos/games/create-game.dto";
import { UpdateGameDto } from "../dtos/games/update-game.dto";
import { GameEntity } from "../entities/game.entity";

export abstract class GamesDataSource {

    abstract create( createGameDto: CreateGameDto ): Promise<GameEntity>;

    abstract update( updateGameDto: UpdateGameDto ): Promise<GameEntity>;

    abstract getAll(): Promise<GameEntity[]>;

    abstract findById( id: string ): Promise<GameEntity>;
}
