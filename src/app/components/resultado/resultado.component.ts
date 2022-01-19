import { Component, OnInit } from '@angular/core';
import {Avengers, VengadoresService} from "../../services/avengers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  vengadores:Avengers[]=[];
  vengadorOrganizado:Avengers[]=[];

  constructor(private _avengersService:VengadoresService) {

  }

  ngOnInit(): void {
  this.vengadores=this._avengersService.getVideoavengers();
  this.organizarVengadorMaxLink();
  }

  private organizarVengadorMaxLink(){
    let mayorLikes=this.vengadores[0].like;
    let mayorDislike=this.vengadores[0].dislike;

    let posi_mayor_likes:number=0;
    let posi_mayor_dislike:number=0;


    for (let i=0;i<this.vengadores.length;i++){
      if (this.vengadores[i].like>mayorLikes){
        mayorLikes=this.vengadores[i].like;
      }
    }

    for (let j=0;j<this.vengadores.length;j++){
     if (this.vengadores[j].dislike>mayorDislike){
      mayorDislike=this.vengadores[j].dislike;
     }
    }

    for (let index=0;index<this.vengadores.length;index++){
      if (this.vengadores[index].like==mayorLikes){
        posi_mayor_likes=index;
      }
    if (this.vengadores[index].dislike==mayorDislike){
      posi_mayor_dislike=index;
    }
    }
    this.vengadorOrganizado.push(this.vengadores[posi_mayor_likes]);
    this.vengadorOrganizado.push(this.vengadores[posi_mayor_dislike]);

  }

}
