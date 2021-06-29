import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCowinService {

  apiUrl = "https://cdn-api.co-vin.in/api/v2/admin/location/states"
  constructor(private _https:HttpClient, private _router:Router) { }

  getAllCowinStates(){
    return this._https.get(this.apiUrl);
  }
}
