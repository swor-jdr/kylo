import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Group } from '../../../faction/models/group.model';
import { GroupService } from '../../../faction/services/group.service';

@Component({
  selector: 'app-create-personnage',
  templateUrl: './create-personnage.component.html',
  styleUrls: ['./create-personnage.component.css']
})
export class CreatePersonnageComponent implements OnInit {

  factions: Group[];

  constructor(private store: Store, private groups$: GroupService) { }

  ngOnInit() {
    this.getFactions();
  }

  create() {
    //
  }

  async getFactions() {
    this.groups$.list().subscribe(
      groups => this.factions = groups,
      err => console.error(err)
    );
  }
}
