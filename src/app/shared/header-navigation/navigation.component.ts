import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbPanelChangeEvent, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Store, Select } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import * as _ from 'lodash';

import { AuthState } from '../../@swor/auth/state/auth.state';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../@swor/auth/models/user.model';
import { PersonnageState } from '../../@swor/auth/state/personnage.state';
import { Personnage } from '../../@swor/auth/models/personnage.model';
import { Logout } from '../../@swor/auth/state/auth.actions';
import { ChangeCurrentPersonnage } from '../../@swor/auth/state/personnage.actions';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit, OnDestroy {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  constructor(private modalService: NgbModal, private store: Store) {}

  @Select(AuthState.user) user$: Observable<User>;
  @Select(PersonnageState.personnage) pj$: Observable<Personnage>;
  private userSubscription: Subscription;
  private pjSubscription: Subscription;
  public user: User;
  public inactivePersonnages: Personnage[];
  public currentPersonnage: Personnage;

  public showSearch = false;

  // This is for Notifications
  notifications: Object[] = [
    {
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      round: 'round-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  ngOnInit() {
    this.userSubscription = this.user$.subscribe(
      (user) => {
        this.user = user;
      },
      (err) => console.log(err)
    );

    this.pjSubscription = this.pj$.subscribe(
      (personnage) => {
        this.currentPersonnage = personnage;
        this.inactivePersonnages = _.filter(this.user.personnages, (item: Personnage) => item !== personnage);
        console.log('current nav = ', personnage);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.pjSubscription.unsubscribe();
  }

  logout() {
    this.store.dispatch(new Logout);
  }

  login() {
    this.store.dispatch(new Navigate(['/auth/login']));
  }

  addPersonnage() {
    this.store.dispatch(new Navigate(['personnage/creer']));
  }

  change(personnage: Personnage) {
    this.store.dispatch(new ChangeCurrentPersonnage(personnage));
  }
}
