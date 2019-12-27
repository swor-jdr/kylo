import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MixpanelService } from './mixpanel.service';
import { MixpanelState } from './mixpanel.state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [MixpanelService, MixpanelState],
  exports: [MixpanelService],
})
export class AnalyticsModule { }
