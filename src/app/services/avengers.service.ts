import { Injectable } from "@angular/core";
@Injectable()
export class AvengersService {

    private avengers:Avengers[]=[
        {
            nombre:'Anthony Edward Stark',
            alias: 'Iron Man',
            img:'assets/img/avengers/IronMan.webp',
            especie:'Human',
            nacionalidad:'American',
            fecha_nacimiento :'May 29, 1970',
            frase  : "My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.",
            like:0,
            dislike:0
        },{
            nombre:'Steven Grant Rogers',
            alias: 'Captain America',
            img:'assets/img/avengers/CapAmerica.webp',
            especie:'Human',
            nacionalidad:'American',
            fecha_nacimiento :'July 4, 1918',
            frase  : "For as long as I can remember, I just wanted to do what was right. I guess I'm not quite sure what that is anymore. And I thought I could throw myself back in and follow orders, serve. It's just not the same.",
            like:0,
            dislike:0
        },{
            nombre:'Thor Odinson',
            alias: 'Thor',
            img:'assets/img/avengers/Thor.webp',
            especie:'Asgardian',
            nacionalidad:'Asgardian',
            fecha_nacimiento :'964 A.D.–965 A.D.',
            frase  : "It's time for me to be who I am, rather than who I'm supposed to be.",
            like:0,
            dislike:0
        },{
            nombre:'Bruce Banner',
            alias: 'Hulk',
            img:'assets/img/avengers/Hulk.webp',
            especie:'Human',
            nacionalidad:'American Sakaaran',
            fecha_nacimiento :'December 18, 1969',
            frase  : "For years, I've been treating the Hulk like he's some kind of disease... something to get rid of. But then, I start looking at him as the cure. Eighteen months in a gamma lab, I put the brains and the brawn together. And now, look at me. Best of both worlds.",
            like:0,
            dislike:0
        },{
            nombre:'Scott Edward Harris Lang',
            alias: 'Ant Man',
            img:'assets/img/avengers/AntMan.webp',
            especie:'Human',
            nacionalidad:'American',
            fecha_nacimiento :'NA',
            frase  : "I do some dumb things and the people that I love the most pay the price. Mainly you.",
            like:0,
            dislike:0
        },{
            nombre:'Peter Benjamin Parker',
            alias: 'Spider Man',
            img:'assets/img/avengers/SpiderMan.webp',
            especie:'Human',
            nacionalidad:'American',
            fecha_nacimiento :'August 10, 2001',
            frase  : "Truth is... that this is all my fault. I accidentally brought those dangerous people here. And if those people are watching... just know that I really did try to help you. I mean, I could've killed you. At any given moment, but I didn't. Because my Aunt May taught me that everyone deserves a second chance.",
            like:0,
            dislike:0
        },{
            nombre:'Stephen Vincent Strange',
            alias: 'Doctor Strange',
            img:'assets/img/avengers/DoctorStrange.webp',
            especie:'Human',
            nacionalidad:'American',
            fecha_nacimiento :'NA',
            frase  : "What is your job exactly, besides making balloon animals? Protecting your reality, douchebag.",
            like:0,
            dislike:0
        },{
            nombre:"T'Challa",
            alias: 'Black Panther',
            img:'assets/img/avengers/BlackPanther.webp',
            especie:'Human',
            nacionalidad:'Wakandan',
            fecha_nacimiento :'NA',
            frase  : "My name is King T'Challa, son of King T'Chaka. I am the sovereign ruler of the nation of Wakanda. And for the first time in our history, we will be sharing our knowledge and resources with the outside world.",
            like:0,
            dislike:0
        },{
            nombre:"Loki Laufeyson",
            alias: 'Loki',
            img:'assets/img/avengers/Loki.webp',
            especie:'Frost Giant',
            nacionalidad:'Asgardian Jotun',
            fecha_nacimiento :'965 A.D.',
            frase  : "I, Loki, Prince of Asgard, Odinson, the rightful King of Jotunheim, God of Mischief, do hereby pledge to you, my undying fidelity.",
            like:0,
            dislike:0
         },{
            nombre:"Natalia Alianovna Romanoff",
            alias: 'Black Widow',
            img:'assets/img/avengers/BlackWidow.webp',
            especie:'Human',
            nacionalidad:'Russian',
            fecha_nacimiento :'December 3, 1984',
            frase  : "I used to have nothing. And then I got this. This job. This family. And I was better because of it. And even though they're gone... I'm still trying to be better.",
            like:0,
            dislike:0
        }

    ];

    constructor(){

    }

    getVideoavengers():Avengers[]{
        return this.avengers;
    }

    getVideojuego(id:number){
        return this.avengers[id];
    }
    buscarVideoavengers(termino:string):Avengers[]{
        let videos:Avengers[] = [];
        termino=termino.toLowerCase();
        for(let videojuego of this.avengers){
            let nombre = videojuego.nombre.toLowerCase();
            if(nombre.indexOf(termino)>=0 ){
                videos.push(videojuego);

            }
        }
        return videos;
    }

}

export interface Avengers{
    nombre:String,
    alias:String,
    img:String,
    nacionalidad:String,
    fecha_nacimiento:String,
    frase:String,
    especie:String,
    like:number,
    dislike:number
}
