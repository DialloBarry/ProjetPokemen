import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {
  public stringVar= new Subject<string>();
  value: string ='';
   getstringvar():Subject<string>{return this.stringVar;}
   setstringvar(newstringvar : string){this.stringVar.next(newstringvar);}
  getvalue():string{
    return this.value;
  }
  setvalue(value: string){
    this.value=value;
  }

  constructor() { }
}
