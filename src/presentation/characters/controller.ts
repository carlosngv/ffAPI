import { Request, Response } from 'express';
import { CharacterRepository } from '../../domain/repositories/character.repository';
import { CreateCharacterDto } from '../../domain/dtos/characters/create-character.dto';
import { UpdateCharacterDto } from '../../domain/dtos/characters/update-character.dto';

export class CharactersController {

    constructor(
        private readonly repository: CharacterRepository
    ) {}

    public getAll = async ( req: Request, res: Response ) => {

        const characters = await this.repository.getAll();

        res.status(200).json({
            characters
        });
    }

    public getById = async ( req: Request, res: Response ) => {
        const { id } = req.params;

        try {
            const character = await this.repository.findById( id );
            res.status(200).json({ character });
        } catch( error ) {
            return res.status(400).json({ error });
        }
    }

    public update = async ( req: Request, res: Response ) => {

        const id = req.params.id;
        const [ error, dto ] = UpdateCharacterDto.create( { ...req.body, id } );

        if( error ) return res.status(400).json( { error } );

        try {

            const updatedCharacter = await this.repository.update( dto! );

            return res.status(201).json( updatedCharacter );

        } catch ( error ) {
            return res.status(400).json({ error });
        }

    }

    public create = async ( req: Request, res: Response ) => {
        const [ error, dto ] = CreateCharacterDto.create( req.body );
        console.log(dto);

        if( error ) return res.status(400).json( { error } );

        try {
            // ? Retorna la entidad del Character, implementado en el GameDatasourceImpl
            const newCharacter = await this.repository.create( dto! );

            return res.status(201).json( newCharacter )
        } catch( error ) {
            return res.status(400).json({ error });
        }
    }

}
