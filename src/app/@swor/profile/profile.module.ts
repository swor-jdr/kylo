import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelfComponent } from './views/self/self.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabProfileComponent } from './components/tab-profile/tab-profile.component';
import { TabTimelineComponent } from './components/tab-timeline/tab-timeline.component';
import { MainComponent } from './views/main/main.component';


@NgModule({
  declarations: [SelfComponent, TabProfileComponent, TabTimelineComponent, MainComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ]
})
export class ProfileModule { }
