import { Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProfileDesktopComponent } from '../desktop';
import { ProfileMobileComponent } from '../mobile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  
})
export class ProfileComponent implements OnInit {

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
        if (window.innerWidth < 500) {
            this.placeholder.clear()
            this.placeholder.createComponent(ProfileMobileComponent)
        } else {
            this.placeholder.clear()
            this.placeholder.createComponent(ProfileDesktopComponent)
        }
    }
}
