import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  breakpointObserverSubs?: Subscription;
  isSmallScreen = false;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserverSubs = this.breakPointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });
  }
  ngOnDestroy(): void {
    this.breakpointObserverSubs?.unsubscribe();
  }
}
