export class Characters {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: origin;
    location: origin;
    image: string;
    episode: [];
    url: string;
    created: Date;


    constructor(){
        this.id         = 0;
        this.name       = "";
        this.status     = "";
        this.species    = "";
        this.type       = "";
        this.gender     = "";
        this.origin     = new origin;
        this.location   = new origin;
        this.image      = "";
        this.episode    = [];
        this.url        = "";
        this.created    = new Date;
    }
}

export class origin {
    name: string;
    url: string;

    constructor() {
        this.name = "";
        this.url = "";
    }
}