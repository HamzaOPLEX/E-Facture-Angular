import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveToCookieService {

  // Function to save data in cookies
  saveInCookies(temp_data, Doc_ID) {
    localStorage.setItem(Doc_ID, JSON.stringify(temp_data),);
  }

  // Function to save data based on type (table or billing)
  save(Doc_ID, data, type) {
    // Retrieve existing data for Doc_ID from cookies
    let temp_data = JSON.parse(localStorage.getItem(Doc_ID))

    // If no data found, set up new cookies
    if (temp_data == null) {
      this.setupCookies(Doc_ID)
    }
    // If data already exists, update it
    else if (temp_data !== null) {
      if (type == 'table') {
        temp_data['table_data'] = data
        console.log("[+] SaveToCookieService: temp_table_data =>", temp_data)
        console.log("[+] SaveToCookieService : New Table Change Detected Saving To Cookies")
        localStorage.setItem(Doc_ID, JSON.stringify(temp_data));
      }
      else if (type == "billing") {
        temp_data['billing_data'] = data
        console.log("[+] SaveToCookieService: temp_billing_data =>", temp_data)
        console.log("[+] SaveToCookieService : New billing Change Detected Saving To Cookies")
        localStorage.setItem(Doc_ID, JSON.stringify(temp_data));
      }
    }
  }

  // Function to get table data from cookies
  getData(Doc_ID,type) {
    if(type=='table'){
      return JSON.parse(localStorage.getItem(Doc_ID))['table_data'];
    }
    else if (type == 'billing'){
      return JSON.parse(localStorage.getItem(Doc_ID))['billing_data'];
    }
    else if (type == null){
      return JSON.parse(localStorage.getItem(Doc_ID));
    }
  }


  // Function to set up cookies with initial data
  setupCookies(Doc_ID: string) {
    let ttl = new Date().getTime() + 86400000 // 24H is time to live

    let temp_data_to_save = {}
    let temp_data = {
      billing_data: {}, // will store just on row of data
      table_data: [], // will store many table row data
      expiry: ttl, //recheck maybe no correct calculation
    }

    // Save initial data in cookies
    this.saveInCookies(temp_data, Doc_ID)
    console.log("[+] SaveToCookieService : Cookies have been set up...", temp_data_to_save)
  }

  constructor() { }
}
