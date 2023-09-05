import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  workingdays: any = [];
  updateworkingdays: any = [];


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

  constructor(public activatedRoute: ActivatedRoute,
    private router: Router,
    public alertController: AlertController) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Recieved on Bin Page', params);
      this.workingdays = JSON.parse(params['userdata']);
      console.log('singleuser==>', this.workingdays)
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log('Hello====')
    this.workingdays.forEach((element: any) => {
      console.log('element', element);
      if (element.is_open && element.day == 'Monday') {
        this.monday = element.is_open;
        this.mon_start_time = element.start_time
        this.mon_end_time = element.end_time
      }
      else if (element.is_open && element.day == 'Tuesday') {
        this.tuesday = element.is_open;
        this.tue_start_time = element.start_time
        this.tue_end_time = element.end_time
      }
      else if (element.is_open && element.day == 'Wednesday') {
        this.wednesday = element.is_open;
        this.wed_start_time = element.start_time
        this.wed_end_time = element.end_time
      }
      else if (element.is_open && element.day == 'Thursday') {
        this.thursday = element.is_open;
        this.thu_start_time = element.start_time
        this.thu_end_time = element.end_time
      }
      else if (element.is_open && element.day == 'Friday') {
        this.friday = element.is_open;
        this.fri_start_time = element.start_time
        this.fri_end_time = element.end_time
      }
      else if (element.is_open && element.day == 'Saturday') {
        this.saturday = element.is_open;
        this.sat_start_time = element.start_time
        this.sat_end_time = element.end_time
      }
      else if (element.is_open && element.day == 'Sunday') {
        this.sunday = element.is_open;
        this.sun_start_time = element.start_time
        this.sun_end_time = element.end_time
      }
    });

  }


  async updatedata() {
    if(this.monday == false){
      this.mon_start_time = '';
      this.mon_end_time = '';
    }
    if(this.tuesday == false){
      this.tue_start_time = '';
      this.tue_end_time = '';
    }
    if(this.wednesday == false){
      this.wed_start_time = '';
      this.wed_end_time = '';
    }
    if(this.thursday == false){
      this.thu_start_time = '';
      this.thu_end_time = '';
    }
    if(this.friday == false){
      this.fri_start_time = '';
      this.fri_end_time = '';
    }
    if(this.saturday == false){
      this.sat_start_time = '';
      this.sat_end_time = '';
    }
    if(this.sunday == false){
      this.sun_start_time = '';
      this.sun_end_time = '';
    }

    this.updateworkingdays = [
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

    let index = this.updateworkingdays.findIndex((element: any) => element.is_open);
    console.log('index',index)
   
    if(index > -1){
      console.log('key - updateworkingdays',this.updateworkingdays)
      localStorage.setItem('workingdays', JSON.stringify(this.updateworkingdays));
      // console.log('workingdays',this.workingdays);
      {
        const alert = await this.alertController.create({
          header: 'Alert',
          message: 'Update Successfully',
          buttons: ['Okay'],
        });
        await alert.present();
      }
    
    this.router.navigate(['/view']);

    }
    else{
      localStorage.removeItem("workingdays");
    }
      
  

}
}
