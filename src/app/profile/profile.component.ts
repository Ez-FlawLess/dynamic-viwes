import { Component, Input } from "@angular/core";

@Component({
    selector: 'none',
    template: '',
})
export class ProfileComponent {
    @Input() name: string | undefined;

    title: string = 'hi'
}




