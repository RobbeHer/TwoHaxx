import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerFooterComponent } from './listener-footer/listener-footer.component';
import { ListenerNavigationComponent } from './listener-navigation/listener-navigation.component';



@NgModule({
  declarations: [ListenerFooterComponent, ListenerNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [ListenerFooterComponent, ListenerNavigationComponent]
})
export class SharedModule { }
