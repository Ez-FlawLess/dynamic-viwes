import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  ],
  exports: [
    ProfileDesktopComponent,
    ProfileMobileComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileModule { }
