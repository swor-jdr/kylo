import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';
import { environment } from '../../../environments/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { states } from './store.config';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot(states, {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: true }),
    NgxsLoggerPluginModule.forRoot({ disabled: true }),
    NgxsRouterPluginModule.forRoot(),
    NgxsWebsocketPluginModule.forRoot({
      url: environment.base.socket
    }),
    NgxsStoragePluginModule.forRoot({
      key: environment.storage
    }),
    NgxsDispatchPluginModule.forRoot(),
  ],
  exports: [
    NgxsModule,
    NgxsLoggerPluginModule,
    NgxsReduxDevtoolsPluginModule,
    NgxsRouterPluginModule,
    NgxsWebsocketPluginModule,
    NgxsStoragePluginModule,
    NgxsDispatchPluginModule,
  ],
  declarations: []
})
export class StoreModule { }
