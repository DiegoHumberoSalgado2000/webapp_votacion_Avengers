import {Component, OnInit} from '@angular/core';
import {VengadoresService,Avengers} from "../../services/avengers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

vengadores:Avengers[]=[];

  constructor(private _avengerService:VengadoresService, private router:Router) { }

  ngOnInit(): void {
this.vengadores=this._avengerService.getVideoavengers();
  }

public setLike(i:number){
    this._avengerService.like(i);
}

public setDislike(i:number){
    this._avengerService.disLike(i);
}

}
