import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { user } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GsearchService {
  user!:user;

  constructor(private http:HttpClient) { }

  findUser(ghubname:string){
    const promise = new Promise<void>((resolve,reject)=>{
      this.http.get<user>('${environment.base_url}${ghubname}',{
        headers:{
          Authorization: 'token ${environment.access_token}'
        }
      }).subscribe({
        next:(res:any)=>{
          this.user=res;
          console.log(res)
          resolve()

        },
        error:(error:any)=>{
          console.log(error)

        },
        complete:()=>{
          console.log("completed")


        }
      })
    })
    return promise;
  }
}
