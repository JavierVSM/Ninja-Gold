import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  gold: any[] = [];
  show: any[] = [];
  Change: any = {newnumber: ""};
  notifications:any = [];

  constructor(private _httpService: HttpService){}

  ngOnInit(): void {
    this.getGoldCount();
    this.show = this.gold;
  }

  getGoldCount(){
    this._httpService.getGold()
    .subscribe((data:any)=>{
      this.gold = data;          
    });
}

  farm( event: any ): void {
    let x= Math.floor(Math.random() * (5 - 2)) + 2;
    this.Change.newnumber=this.gold[0].goldCount+x
    this._httpService.editGold(this.Change)
    .subscribe((data:any) =>{
      this.notifications.push(`You've earned ${x} gold at the Farm`);
      this.show=this.Change;
    });
  }

  cave( event: any ): void {
    let x= Math.floor(Math.random() * (10 - 5)) + 5;
    this.Change.newnumber=this.gold[0].goldCount+x
    this._httpService.editGold(this.Change)
    .subscribe((data:any) =>{
      this.notifications.push(`You've earned ${x} gold at the Cave`);
      this.show=this.Change;
    });
  }
  
  casino( event: any ): void {
    let luckyNumber= Math.floor(Math.random() * (100 - 1)) + 1;
    if( luckyNumber >= 50 ){
      let x= Math.floor(Math.random() * (100 - 1)) + 1;
      this.Change.newnumber=this.gold[0].goldCount+x
      this._httpService.editGold(this.Change)
      .subscribe((data:any) =>{
        this.notifications.push(`You've earned ${x} gold at the Casino`);
        this.show=this.Change;
      });
    }
    else{
      let x= Math.floor(Math.random() * (100 - 1)) + 1;
      this.Change.newnumber=this.gold[0].goldCount-x
      this._httpService.editGold(this.Change)
      .subscribe((data:any) =>{
        this.notifications.push(`You've lost ${x} gold at the Casino`);
        this.show=this.Change;
      });
    }
  }

  house( event: any ): void {
    let x= Math.floor(Math.random() * (15 - 7)) + 7;
    this.Change.newnumber=this.gold[0].goldCount+x
    this._httpService.editGold(this.Change)
    .subscribe((data:any) =>{
      this.notifications.push(`You've earned ${x} gold at the House`);
      this.show=this.Change;
      console.log (this.notifications);
    });
  }

  reset( event: any ): void {
    this._httpService.editGold(this.Change)
    .subscribe((data:any) =>{
      location.reload();
    });
  }

}
