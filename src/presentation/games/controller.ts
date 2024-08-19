import { Request, Response } from 'express';
import { GamesRepository } from '../../domain/repositories/games.repository';
import { CreateGameDto } from '../../domain/dtos/games/create-game.dto';
import { UpdateGameDto } from '../../domain/dtos/games/update-game.dto';

export class GamesController {

    constructor(
        private readonly repository: GamesRepository
    ) {}

    public getAll = async ( req: Request, res: Response ) => {

        const games = await this.repository.getAll();

        res.status(200).json({
            games
        });
    }

    public getById = async ( req: Request, res: Response ) => {
        const { id } = req.params;

        try {
            const game = await this.repository.findById( id );
            res.status(200).json({ game });
        } catch( error ) {
            return res.status(400).json({ error });
        }
    }

    public update = async ( req: Request, res: Response ) => {

        const id = req.params.id;
        const [ error, dto ] = UpdateGameDto.create( { ...req.body, id } );

        if( error ) return res.status(400).json( { error } );

        try {

            const updatedGame = await this.repository.update( dto! );

            return res.status(201).json( updatedGame );

        } catch ( error ) {
            return res.status(400).json({ error });
        }

    }

    public create = async ( req: Request, res: Response ) => {
        const [ error, dto ] = CreateGameDto.create( req.body );
        console.log(dto);

        if( error ) return res.status(400).json( { error } );

        try {
            // ? Retorna la entidad del Game, implementado en el GameDatasourceImpl
            const newGame = await this.repository.create( dto! );

            return res.status(201).json( newGame )
        } catch( error ) {
            return res.status(400).json({ error });
        }
    }

}
