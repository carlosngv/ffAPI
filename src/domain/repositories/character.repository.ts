import { CreateCharacterDto } from "../dtos/characters/create-character.dto";
import { UpdateCharacterDto } from "../dtos/characters/update-character.dto";
import { CharacterEntity } from "../entities/character.entity";

export abstract class CharacterRepository {

    abstract create( createCharacterDto: CreateCharacterDto ): Promise<CharacterEntity>;

    abstract update( updateCharacterDto: UpdateCharacterDto ): Promise<CharacterEntity>;

    abstract getAll(): Promise<CharacterEntity[]>;

    abstract findById( id: string ): Promise<CharacterEntity>;
}
