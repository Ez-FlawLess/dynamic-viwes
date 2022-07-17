import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDesktopComponent, ProfileMobileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileDesktopComponent,
    ProfileMobileComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
