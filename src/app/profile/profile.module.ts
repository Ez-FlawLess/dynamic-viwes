import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDesktopComponent } from './desktop';
import { ProfileMobileComponent } from './mobile';

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
