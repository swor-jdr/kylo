import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PersonnageState } from '../../../auth/state/personnage.state';
import { Observable } from 'rxjs/Observable';
import { Personnage } from '../../../auth/models/personnage.model';
import { Subscription } from 'rxjs';
import { TabTimelineComponent } from '../../components/tab-timeline/tab-timeline.component';
import { TabProfileComponent } from '../../components/tab-profile/tab-profile.component';
import { PersonnageService } from '../../../auth/services/personnage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IChangedPersonnage } from '../../../auth/state/personnage.actions';

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {

  constructor(
    private store: Store,
    private persoS: PersonnageService,
    private formBuilder: FormBuilder
    ) { }

  @ViewChild(TabTimelineComponent, {static: false}) tabTimelineComponent: TabTimelineComponent;
  @ViewChild(TabProfileComponent, {static: false}) tabProfileComponent: TabProfileComponent;

  @Select(PersonnageState.personnage) personnage$: Observable<Personnage>;
  private pjSubscription: Subscription;
  public currentPersonnage: Personnage;
  public selfForm: FormGroup;

  ngOnInit() {
    this.pjSubscription = this.personnage$.subscribe(
      (personnage) => {
        this.currentPersonnage = personnage;
      },
      err => console.error(err)
    );

    this.selfForm = this.formBuilder.group({
      'name': ['', Validators.required],
    });
  }

  onChange(data: Personnage) {
    this.store.dispatch(new IChangedPersonnage(data));
  }
}
