

export class CreateGameDto {

    // ? Objetos para transporar la data necesaria previo a insertar en base de datos

    private constructor(
        public readonly title: string,
        public readonly description: string,
        public readonly releaseDate: Date,
        public readonly platform: string,
    ) {}

    static create( props: { [ key: string ]: any } ): [ string?, CreateGameDto? ] {
        const { title, description, releaseDate, platform } = props;

        if( !title ) return [ `title is required`, undefined ];
        if( !description ) return [ `description is required`, undefined ];
        if( !releaseDate ) return [ `releaseDate is required`, undefined ];
        if( !platform ) return [ `platform is required`, undefined ];

        return [ undefined, new CreateGameDto( title, description, releaseDate, platform ) ];
    }

}
