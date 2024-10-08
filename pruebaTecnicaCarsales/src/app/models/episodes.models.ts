export class Episodes{
    id: number;
    name:string;
    air_date: Date;
    episode: string
    characters: [];
    url: string;
    created: Date;

    constructor(){
        this.id = 0;
        this.name = "";
        this.air_date = new Date;
        this.episode = "";
        this.characters = [];
        this.url = "";
        this.created = new Date;
      }
}