import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Group } from '../../../faction/models/group.model';
import { GroupService } from '../../../faction/services/group.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface IPersonnageForm {
  name: string;
  faction: Group;
  job: string;
  code_recuperation?: string;
}

@Component({
  selector: 'app-create-personnage',
  templateUrl: './create-personnage.component.html',
  styleUrls: ['./create-personnage.component.css']
})
export class CreatePersonnageComponent implements OnInit {

  factions: Group[];
  personnageForm: FormGroup;

  constructor(private store: Store, private groups$: GroupService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getFactions();
    this.personnageForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'job': ['', Validators.required],
      'faction': ['', Validators.required],
    });
  }

  submit(payload: IPersonnageForm) {
    // if code is required but none given, then NOPE
    // if all ok, dispatch !
  }

  async getFactions() {
    this.groups$.list().subscribe(
      groups => this.factions = groups,
      err => console.error(err)
    );
  }
}
