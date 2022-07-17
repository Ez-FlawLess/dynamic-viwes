import { Component } from "@angular/core";
import { ProfileComponent } from "../profile.component";

@Component({
    selector: 'app-mobile-profile',
    templateUrl: './index.html',
})
export class ProfileMobileComponent extends ProfileComponent {

    constructor() {
        super();
    }

}