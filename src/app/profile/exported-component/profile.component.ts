import { Component, ComponentRef, HostListener, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProfileDesktopComponent } from '../desktop';
import { ProfileMobileComponent } from '../mobile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  
})
export class ProfileComponent implements OnInit {
    @Input() name: string | undefined;

    @ViewChild('placeholder', {read: ViewContainerRef, static: true})
    public placeholder!: ViewContainerRef;

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.selectView()
    }

    constructor( ) {}

    ngOnInit(): void {
        this.selectView()
    }

    selectView() {
        let component: ComponentRef<ProfileMobileComponent>
        if (window.innerWidth < 500) {
            this.placeholder.clear()
            component = this.placeholder.createComponent(ProfileMobileComponent)
        } else {
            this.placeholder.clear()
            component = this.placeholder.createComponent(ProfileDesktopComponent)
        }
        component.instance.name = this.name
    }
}
