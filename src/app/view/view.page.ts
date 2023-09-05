import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  viewdata: any = [];



  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.showdata();
  }
  showdata() {
    let getdata: any = localStorage.getItem('workingdays');
    if (getdata != null) {
      this.viewdata = JSON.parse(getdata);
      console.log("viewdata", this.viewdata);
    }


  }
  goToBin(data:any) {
    console.log('data', data)
    const navigationExtras = {
      queryParams: {
        userdata: JSON.stringify(data),
      }
    };
    console.log('go to bin ', data);
    this.router.navigate(['/edit'], navigationExtras);
  }

}
