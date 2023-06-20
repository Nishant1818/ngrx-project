import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {




  constructor(private http: HttpClient) {}

  users(searchTerm:string): Observable<any> {
    console.log(searchTerm,'ter')
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODM4MDY2MDMsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiNDk1Yjg3MjgtYzc2MS00ZmE3LTgzZmUtZGI3NWE3ZDYzMjIxIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.O1IkyD75bFAw5VOWhc6MzeG97Dg-muafEdMM3aWzNyk';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://apis.fretron.com/shipment-view/partner-fleet/fleets/v2?size=50&sharedOnly=false&search=${searchTerm}&filters={"fleetType":[],"trackingEnabled":[],"fleetOwnerName":[],"trackingMode":[],"vehicleType":[],"vehicleBranch":[],"manufacturer":[],"vehicleGroup":[],"vehicleZone":[],"vehicleRegion":[],"vehicleModel":[],"status":null,"_or":{"groupsShared":[],"sharedWith":[]}}`, { headers });
  }
}


//"searchText":"RJ33V0001"