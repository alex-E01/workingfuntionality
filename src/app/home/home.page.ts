import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  workingdays: any = [];

  // monday data
  monday: boolean = false;
  mon_start_time: any;
  mon_end_time: any;
  // tuesday
  tuesday: boolean = false;
  tue_start_time: any;
  tue_end_time: any;
  // wednesday
  wednesday: boolean = false;
  wed_start_time: any;
  wed_end_time: any;
  // thursday
  thursday: boolean = false;
  thu_start_time: any;
  thu_end_time: any;
  // friday
  friday: boolean = false;
  fri_start_time: any;
  fri_end_time: any;
  // saturday
  saturday: boolean = false;
  sat_start_time: any;
  sat_end_time: any;
  // sunday
  sunday: boolean = false;
  sun_start_time: any;
  sun_end_time: any;

  constructor(private router: Router, private alertController: AlertController) { }

  ionViewWillEnter() {}



  async savedata() {
    // console.log('is_monday',this.monday);
    this.workingdays = [
      {
        day: 'Monday',
        is_open: this.monday,
        start_time: this.mon_start_time,
        end_time: this.mon_end_time
      },
      {
        day: 'Tuesday',
        is_open: this.tuesday,
        start_time: this.tue_start_time,
        end_time: this.tue_end_time
      },
      {
        day: 'Wednesday',
        is_open: this.wednesday,
        start_time: this.wed_start_time,
        end_time: this.wed_end_time
      },
      {
        day: 'Thursday',
        is_open: this.thursday,
        start_time: this.thu_start_time,
        end_time: this.thu_end_time
      },
      {
        day: 'Friday',
        is_open: this.friday,
        start_time: this.fri_start_time,
        end_time: this.fri_end_time
      },
      {
        day: 'Saturday',
        is_open: this.saturday,
        start_time: this.sat_start_time,
        end_time: this.sat_end_time
      },
      {
        day: 'Sunday',
        is_open: this.sunday,
        start_time: this.sun_start_time,
        end_time: this.sun_end_time
      }
    ]

    let index = this.workingdays.findIndex((element: any) => element.is_open== false);
    // console.log('index',index)
    
    // return false;
    

      if(index > -1)
      {
        localStorage.setItem('workingdays', JSON.stringify(this.workingdays));
        console.log('workingdays', this.workingdays);
        {
          const alert = await this.alertController.create({
            header: 'Alert',
            message: 'Saved Successfully',
            buttons: ['Okay'],
          });
          await alert.present();
        }
        this.router.navigate(['/view']);
      }else{
        // console.log('workingdays = 0',this.workingdays)
        // localStorage.setItem('workingdays', JSON.stringify(this.workingdays));
          console.log('Please select at least one day');
      }

    
  }
}
