import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // we need this to use route parameters.
import {Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    // dependency inject ActivateRoute, Router and Service module into constructor.
    // ActivatedRoute module is used fo main navigation
    // Router module is used for the goToHomePage method below
     // Dataservice module is used for sharing the goals  array across out 2 components.
    this.route.params.subscribe(
      res => console.log(res.id) // reads the url parameter "id".
    );
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res); // load our goals
  }

  goToHomePage() {
    this.router.navigate(['']); // navigation method used in the about page
  }

}
