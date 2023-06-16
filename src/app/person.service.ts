import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons = [
    {id:100,name:'Amit Kumar'},
    {id:101,name:'Ajeet Kumar'},
    {id:102,name:'Pawan Kumar'},
    {id:103,name:'Sameer Kumar'},
    {id:104,name:"Mohan Kumar"},
    {id:105,name:"Rita Kumari"}
  ];

  constructor() { }

  getallpersons():Promise<any>{

    return new Promise(resolve=>resolve(this.persons));

  }



}



