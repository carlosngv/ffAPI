

export class UpdateCharacterDto {

    // ? Objetos para transporar la data necesaria previo a insertar en base de datos

    private constructor(
        public readonly id: string,
        public readonly name: number,
        public readonly age: number,
        public readonly origin: string,
        public readonly description: string
    ) {}


    get values() {
        // ? Es para retornar únicamente los valores necesarios al actualizar
        let returnObj: { [ key: string ]: any } = {};

        if( this.name ) returnObj.name = this.name;
        if( this.age ) returnObj.age = this.age;
        if( this.origin ) returnObj.origin = this.origin;
        if( this.description ) returnObj.description = this.description;

        return returnObj;
    }

    static create( props: { [ key: string ]: any } ): [ string?, UpdateCharacterDto? ] {
        const { id, name, age, origin, description } = props;

        if( !id ) return [ 'id is required', undefined ];
        if( !name ) return [ 'name is required', undefined ];
        if( !age ) return [ 'age is required', undefined ];
        if( !origin ) return [ 'origin is required', undefined ];
        if( !description ) return [ 'description is required', undefined ];
        if( !name ) return [ 'name is required', undefined ];

        return [ undefined, new UpdateCharacterDto( id, name, age, origin, description ) ];
    }

}
