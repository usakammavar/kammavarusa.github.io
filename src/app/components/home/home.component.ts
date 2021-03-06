import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Kammavar USA, 60 Village Road, Kendall Park, New Jersey, USA';
  lat: number = 40.4306158;
  lng: number = -74.54329969999998;

  constructor(private homeService: HomeService,public user: UserService) { }
  showSpinner:boolean = false
  ngOnInit() {
    this.showSpinner=true;
        setTimeout(()=>{
          this.showSpinner =false;
        },2000)
      }


  }
