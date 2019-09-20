import { Injectable } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _http: HttpClient, private _apiService: ApiService) { 
  }

  // listActivities(): Observable<Activity[]>
  listActivities(): Observable<any>
  {
    console.log("bouton activity")
    return this._http.get<any>(this._apiService.getApiUrl() + "activities")
  }

  test()
  {
    
  }
}
