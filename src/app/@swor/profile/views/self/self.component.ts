import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PersonnageState } from '../../../auth/state/personnage.state';
import { Observable } from 'rxjs/Observable';
import { Personnage } from '../../../auth/models/personnage.model';
import { Subscription } from 'rxjs';
import { TabTimelineComponent } from '../../components/tab-timeline/tab-timeline.component';
import { TabProfileComponent } from '../../components/tab-profile/tab-profile.component';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {

  constructor(private store: Store) { }

  @ViewChild(TabTimelineComponent, {static: false}) tabTimelineComponent: TabTimelineComponent;
  @ViewChild(TabProfileComponent, {static: false}) tabProfileComponent: TabProfileComponent;

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
