import { GamesDataSource } from "../../domain/datasources/games.datasource";
import { CreateGameDto } from "../../domain/dtos/games/create-game.dto";
import { UpdateGameDto } from "../../domain/dtos/games/update-game.dto";
import { GameEntity } from "../../domain/entities/game.entity";
import { GamesRepository } from "../../domain/repositories/games.repository";


export class GamesRepositoryImpl implements GamesRepository {

    constructor(
        // ? Se inyecta el dataSource genérico, no la implementación, ya que puede variar de fuente
        private readonly gameDatasource: GamesDataSource,
    ) {}

    create(createGameDto: CreateGameDto): Promise<GameEntity> {
        return this.gameDatasource.create( createGameDto );
    }
    update(updateGameDto: UpdateGameDto): Promise<GameEntity> {
        return this.gameDatasource.update( updateGameDto );
    }
    getAll(): Promise<GameEntity[]> {
        return this.gameDatasource.getAll();
    }
    findById( id: string ): Promise<GameEntity> {
        return this.gameDatasource.findById( id );
    }


}
