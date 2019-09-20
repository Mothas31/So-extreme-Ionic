import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ApiService } from '../api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor(private camera: Camera, public photoService: PhotoService, private _http: HttpClient, private _apiService: ApiService) { }

  fakePhoto()
  {
    this.photos[0] = { data: `data:image/png;base64,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`}
  }


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
          data: 'data:image/jpeg;base64,' + imageData
          
      }); }, (err) => {
      // Handle error
      console.log("Camera issue: " + err);
   });

  }
  sendPicture(): Observable<any>
  {
    console.log("click sur envoyer photo");
    //this.fakePhoto();
    return this._http.post<any>(this._apiService.getApiUrl() + "photos/post", {'photo':this.photos[0].data, 'comment': 'test comment'}) ;
  }
  

  getPhoto(): Observable<any>
  {
    console.log("click sur envoyer photo");
    return this._http.get<any>(this._apiService.getApiUrl() + "photos/get")
    
  }
  
  
    
  

 
}

class Photo {
  data: any;
}
