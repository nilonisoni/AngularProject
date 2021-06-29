import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMedicineService {

  apiUrl = "https://arjunbala.com/DFaculty/api.php/records/medicines"
  constructor(private _https:HttpClient) { }

  getAllMedicines(){
    return this._https.get(this.apiUrl);
  }

  delete(id:number){
    return this._https.delete(this.apiUrl + "/" + id);
  }
}
