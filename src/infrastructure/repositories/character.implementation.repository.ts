import { CharacterDataSource } from "../../domain/datasources/character.datasource";
import { CreateCharacterDto } from "../../domain/dtos/characters/create-character.dto";
import { UpdateCharacterDto } from "../../domain/dtos/characters/update-character.dto";
import { CharacterEntity } from "../../domain/entities/character.entity";
import { CharacterRepository } from "../../domain/repositories/character.repository";


export class CharacterRepositoryImpl implements CharacterRepository {

    constructor(
        private readonly characterDatasource: CharacterDataSource,
    ) {}

    create(createCharacterDto: CreateCharacterDto): Promise<CharacterEntity> {
        return this.characterDatasource.create( createCharacterDto );
    }
    update(updateCharacterDto: UpdateCharacterDto): Promise<CharacterEntity> {
        return this.characterDatasource.update( updateCharacterDto );
    }
    getAll(): Promise<CharacterEntity[]> {
        return this.characterDatasource.getAll();
    }
    findById( id: string ): Promise<CharacterEntity> {
        return this.characterDatasource.findById( id );
    }


}
