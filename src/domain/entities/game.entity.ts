
export class GameEntity {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public releaseDate: Date,
        public platform: string,
    ) {}


    static fromObject( object: { [ key: string ]: any } ) {
        const { id, title, description, releaseDate, platform } = object;

        if( !id ) throw 'id is required';
        if( !title ) throw 'title is required';
        if( !description ) throw 'description is required';
        if( !releaseDate ) throw 'releaseDate is required';
        if( !platform ) throw 'platform is required';

        return new GameEntity( id, title, description, releaseDate, platform );
    }

}
