

export class UpdateGameDto {

    // ? Objetos para transporar la data necesaria previo a insertar en base de datos

    private constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly releaseDate: Date,
        public readonly platform: string,
    ) {}


    get values() {
        // ? Es para retornar únicamente los valores necesarios al actualizar
        let returnObj: { [ key: string ]: any } = {};

        if( this.title ) returnObj.title = this.title;
        if( this.description ) returnObj.description = this.description;
        if( this.releaseDate ) returnObj.releaseDate = this.releaseDate;
        if( this.platform ) returnObj.platform = this.platform;

        return returnObj;
    }

    static create( props: { [ key: string ]: any } ): [ string?, UpdateGameDto? ] {
        const { id, title = '', description = '', releaseDate = new Date(), platform = '' } = props;

        if( !id ) return [ 'id is required', undefined ];
        // if( !title ) return [ 'title is required', undefined ];
        // if( !description ) return [ 'description is required', undefined ];
        // if( !releaseDate ) return [ 'releaseDate is required', undefined ];
        // if( !platform ) return [ 'platform is required', undefined ];

        return [ undefined, new UpdateGameDto( id, title, description, releaseDate, platform ) ];
    }

}
