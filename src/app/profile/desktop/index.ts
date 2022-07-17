import { Component } from "@angular/core";
import { ProfileComponent } from "../profile.component";

@Component({
    selector: 'app-desktop-profile',
    templateUrl: './index.html',
})
export class ProfileDesktopComponent extends ProfileComponent {

    constructor() {
        super();
    }

}
