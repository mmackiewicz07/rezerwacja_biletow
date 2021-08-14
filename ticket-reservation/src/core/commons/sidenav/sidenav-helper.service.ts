import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidenavHelperService {
  opened: boolean = true;
  mode: MatDrawerMode = 'side';

  get isOverMode() {
    return this.mode === 'over';
  }

  get disableClose() {
    return !this.isOverMode;
  }

  constructor(private breakpointObserver: BreakpointObserver) {
    this.setMediaQueryState();
  }

  open() {
    this.opened = true;
  }

  close() {
    if (this.isOverMode) {
      this.opened = false;
    }
  }

  private setMediaQueryState() {
    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.opened = true;
        this.mode = 'side';
      }
      // this.store.dispatch(layoutActions.setBreakpoints({ breakpoints: state.breakpoints }));
    });

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.opened = false;
          this.mode = 'over';
        }
      });
  }
}
