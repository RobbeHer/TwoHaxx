import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';



@NgModule({
  declarations: [AdminNavigationComponent, AdminFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminNavigationComponent, AdminFooterComponent]
})
export class SharedModule { }
