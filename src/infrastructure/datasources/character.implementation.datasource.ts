import mongoose from "mongoose";
import { CharacterModel } from "../../data/mongo/models/character";
import { CharacterDataSource } from "../../domain/datasources/character.datasource";
import { CreateCharacterDto } from "../../domain/dtos/characters/create-character.dto";
import { UpdateCharacterDto } from "../../domain/dtos/characters/update-character.dto";
import { CharacterEntity } from "../../domain/entities/character.entity";

export class CharacterDataSourceImpl implements CharacterDataSource {

    // ? Acá se implementa toda la lógica para realizar acciones en base de datos

    async create(createCharacterDto: CreateCharacterDto): Promise<CharacterEntity> {

        const newCharacter = new CharacterModel( createCharacterDto );
        await newCharacter.save();

        return CharacterEntity.fromObject( newCharacter );
    }

    async update(updateCharacterDto: UpdateCharacterDto): Promise<CharacterEntity> {
        const id = updateCharacterDto.id;

        const query = { _id: id};

        const character = this.findById( id );
        if( !character ) throw `Character with id ${ id } not found`;

        const updatedCharacter = await CharacterModel.findByIdAndUpdate( query, updateCharacterDto!.values).exec();

        return CharacterEntity.fromObject( updatedCharacter! );
    }

    async getAll(): Promise<CharacterEntity[]> {
        const characters = await CharacterModel.find();
        return characters.map( char => CharacterEntity.fromObject( char ) );
    }

    async findById( id: string ): Promise<CharacterEntity> {

        const query = { _id: id };

        const character = await CharacterModel.findOne( query );

        if( !character ) throw `Character with id ${ id } not found`;

        return CharacterEntity.fromObject( character );
    }

}
