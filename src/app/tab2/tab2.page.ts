import { Component } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo-service/photo.service';
import { ActivityService } from '../services/activity-service/activity.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  constructor(public photoService: PhotoService, private activityService: ActivityService) {  }


  sendRequest() {
    alert('test');
    this.activityService.listActivities().subscribe( 
      (data) => { alert(data)},
      (error) => alert(error)
    );
  }

  postPhoto()
  {
    this.photoService.sendPicture().subscribe( (data) => { alert(" Photo : " + data)},
    (error) => alert("Error : " + error)
    )
  }

}