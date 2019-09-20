import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public extractData(_res: Response) {
    return _res || { }
  }

  public handleError (operation = 'operation', result?) {
    return (error: any): Observable<any> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result)
    }
  }

  public getApiUrl(){
    return environment.apiUrl
  }
}
