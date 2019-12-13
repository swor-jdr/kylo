import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
export class SelfComponent implements OnInit, OnDestroy {

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
        this.setForm(personnage);
      },
      err => console.error(err)
    );

    
  }

  private setForm(personnage: Personnage) {
    console.log(personnage.bio)
    console.log('signature :', personnage.signature)
    this.selfForm = this.formBuilder.group({
      'name': [{value: personnage.name, disabled: true}, Validators.required],
      'location': [{value: personnage.location}, Validators.maxLength(255)],
      'title': [{value: personnage.title}, Validators.maxLength(255)],
      'job': [{value: personnage.job}, Validators.maxLength(255)],
      'affections': [{value: personnage.affectations}, ''],
      'aversions': [{value: personnage.aversions}, ''],
      'bio': [{value: String(personnage.bio)}, ''],
      'signature': [{value: personnage.signature}, ''],
    });
  }

  ngOnDestroy(): void {
    this.pjSubscription.unsubscribe()
  }

  onChange(data: Personnage) {
    this.store.dispatch(new IChangedPersonnage(data));
  }
}
