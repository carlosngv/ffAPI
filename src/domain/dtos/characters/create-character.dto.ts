

export class CreateCharacterDto {

    // ? Objetos para transporar la data necesaria previo a insertar en base de datos

    private constructor(
        public readonly name: number,
        public readonly age: number,
        public readonly origin: string,
        public readonly description: string
    ) {}

    static create( props: { [ key: string ]: any } ): [ string?, CreateCharacterDto? ] {
        const { name, age, origin, description } = props;

        if( !name ) return [ 'name is required', undefined ];
        if( !age ) return [ 'age is required', undefined ];
        if( !origin ) return [ 'origin is required', undefined ];
        if( !description ) return [ 'description is required', undefined ];
        if( !name ) return [ 'name is required', undefined ];

        return [ undefined, new CreateCharacterDto( name, age, origin, description ) ];
    }

}
