import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-component0',
  templateUrl: './component0.component.html',
  styleUrls: ['./component0.component.css']
})

export class Component0Component implements OnInit {
gold: any[] = [];
Change: any = {newnumber: "0"};

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    this.getGoldCount();
  }

  getGoldCount(){
        this._httpService.getGold()
        .subscribe((data:any)=>{
          this.gold = data;          
        });
  }

  reset( event: any ): void {
    this._httpService.editGold(this.Change)
    .subscribe((data:any) =>{
      location.reload();
    });
  }

}