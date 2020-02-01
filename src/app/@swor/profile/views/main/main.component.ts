import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../../auth/services/personnage.service';
import { ActivatedRoute } from '@angular/router';
import { Personnage } from '../../../auth/models/personnage.model';
import { isNull, isNullOrUndefined } from 'util';
import { Group } from '../../../faction/models/group.model';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import * as _ from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public personnage: Personnage;
  public group: Group;

  constructor(
    private pjS: PersonnageService,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.pjS.getBySlug(params.slug).subscribe(
          (personnage) => this.setPersonnage(personnage),
          // @todo should this.store.dispatch(new Navigate(['/home'])) when error
          (err) => console.error(err)
        )
      }
    )
  }

  private setPersonnage(personnage: Personnage) {
    this.personnage = personnage;
    this.setPjGroup(personnage);
  }

  private setPjGroup(personnage: Personnage) {
    if (!isNullOrUndefined(personnage.assignations)) {
      const main = _.filter(personnage.assignations, (item) => item.isMain)[0];
      this.group = main.group;
      console.log('Group : ', main.group)
    }
  }
}
