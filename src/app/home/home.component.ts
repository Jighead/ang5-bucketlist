import { Component, OnInit } from '@angular/core';
/* importing aniniimations we want to use in this component */
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [ // trigger on goals
      transition('* => *', [ // from any to any transition
        query(':enter', style({opacity: 0 }), {optional: true}), // on enter

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0%)', offset: 1}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
            ]))]), {optional: true})

      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  // stores the count
  itemCount: number;
  // store our text string
  goalText: string = 'life is good';
  // stores our goals
  goals = [];

  constructor(private _data: DataService) { } // dependecy inject out data service. _data is instance of service.

  // on page load
  ngOnInit() {
    this.itemCount = this.goals.length; // on load set the itemCount
    this._data.goal.subscribe(res => this.goals = res);
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText); // push onto the array
    this.goalText = ''; // clear the goaltext var and form
    this.itemCount = this.goals.length; // update count
    this._data.changeGoal(this.goals);
  }
  removeItem(item) {
    this.goals.splice(item, 1); // remove item from array
    this.itemCount = this.goals.length; // update the account
    this._data.changeGoal(this.goals);
  }

}
