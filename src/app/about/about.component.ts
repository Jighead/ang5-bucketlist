import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // we need this to use route parameters.
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    // dependency inject ActivateRoute and Router module into constructor.
    // ActivatedRoute module is used fo main navigation
    // Router module is used for the goToHomePage method below
    this.route.params.subscribe(
      res => console.log(res.id) // reads the url parameter "id".
    );
  }

  ngOnInit() {
  }

  goToHomePage() {
    this.router.navigate(['']); // navigation method used in the about page
  }

}
