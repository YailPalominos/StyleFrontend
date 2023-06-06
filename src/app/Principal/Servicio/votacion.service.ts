import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VotacionService {


  private sUrl:string="https://localhost:7241/Votaciones/"

  constructor(private http: HttpClient) { }

  public getAll(){
    return this.http.get(this.sUrl+"GetAll");
  }
  public insert(oRegistro:any){
    return this.http.post(this.sUrl+"Insert/",oRegistro);
  }
  public getOne(nId:number){
    return this.http.get(this.sUrl+"GetOne/"+nId);
  }
  public update(oRegistro:any){
    return this.http.put(this.sUrl+"Update/",oRegistro);
  }
  public delete(nId:number){
    return this.http.delete(this.sUrl+"Delete/"+nId);
  }
}
