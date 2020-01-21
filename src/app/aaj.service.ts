import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AajService {
  mail: any;
  pass: any;

  constructor() { }
  login(data){
    if(data.email=="mishrashivam90+6@gmail.com" && data.pass=="main hu hero")
    {
    console.log("lOGIN sUCESSFUL");
    }
    else
    {
      console.log("INVALID CREDENTIAL!!!");
      
    }

  }
}
