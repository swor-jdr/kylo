import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create-personnage',
  templateUrl: './create-personnage.component.html',
  styleUrls: ['./create-personnage.component.css']
})
export class CreatePersonnageComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  create() {
    //
  }
}
