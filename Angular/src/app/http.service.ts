import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) { 
  }
  
  getGold(){
    return this._http.get('http://localhost:8080/tasks');
  }

  getTaskbyId(id: any) {
    let url= id;
    return this._http.get('http://localhost:8080/tasks/'+url);
  }

  deleteTaskbyID(id: any) {
    return this._http.delete(`http://localhost:8080/tasks/${id}`)
  }

  addTask(newTask: any) {
    return this._http.post('http://localhost:8080/tasks', newTask);
  }

  createTask(newTask:any){
    return this._http.post(`http://localhost:8080/tasks`, newTask)
  }

  editGold(edited:any){
    return this._http.put('http://localhost:8080/tasks/goldgame', edited)
  }

}