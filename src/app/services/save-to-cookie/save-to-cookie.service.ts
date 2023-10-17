import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveToCookieService {

  saveInCookies(temp_data){
    localStorage.setItem('temp_data', JSON.stringify(temp_data));
  }



  constructor() { }
}
