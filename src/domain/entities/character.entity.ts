

export class CharacterEntity {

    constructor(
        public id: string,
        public name: number,
        public age: number,
        public origin: string,
        public description: string,
    ) {}

    static fromObject( object: { [ key: string ]: any } ) {
        const { id, name, age, origin, description } = object;

        if( !id ) throw `${ id } is required`;
        if( !name ) throw `${ name } is required`;
        if( !age ) throw `${ age } is required`;
        if( !origin ) throw `${ origin } is required`;
        if( !description ) throw `${ description } is required`;
        if( !name ) throw `${ name } is required`;

        return new CharacterEntity( id, name, age, origin, description );

    }

}
