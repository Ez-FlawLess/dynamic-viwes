import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDesktopComponent } from './desktop';
import { ProfileMobileComponent } from './mobile';
import { ProfileComponent } from './component/profile.component';

@NgModule({
  declarations: [
    ProfileDesktopComponent,
    ProfileMobileComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent,
  ],
})
export class ProfileModule { }
