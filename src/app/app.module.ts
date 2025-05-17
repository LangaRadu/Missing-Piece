import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ParallaxTopicsComponent } from './parallax-topics/parallax-topics.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuizPopupComponent } from './quiz-popup/quiz-popup.component';
import {FormsModule} from "@angular/forms";
import { TransferSimulationComponent } from './transfer-simulation/transfer-simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    ParallaxTopicsComponent,
    SidebarComponent,
    QuizPopupComponent,
    TransferSimulationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
