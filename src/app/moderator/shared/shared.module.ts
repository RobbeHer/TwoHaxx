import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeratorFooterComponent } from './moderator-footer/moderator-footer.component';
import { ModeratorNavigationComponent } from './moderator-navigation/moderator-navigation.component';



@NgModule({
  declarations: [ModeratorFooterComponent, ModeratorNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [ModeratorFooterComponent, ModeratorNavigationComponent]
})
export class SharedModule { }
