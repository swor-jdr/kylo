import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PersonnageState } from '../../../auth/state/personnage.state';
import { Observable } from 'rxjs/Observable';
import { Personnage } from '../../../auth/models/personnage.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(PersonnageState.personnage) personnage$: Observable<Personnage>;
  private pjSubscription: Subscription;
  public currentPersonnage: Personnage; 

  ngOnInit() {
    this.pjSubscription = this.personnage$.subscribe(
      (personnage) => {
        this.currentPersonnage = personnage;
      },
      err => console.error(err)
    );
  }
}
