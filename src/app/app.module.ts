import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DescriptionComponent } from './description/description.component';
import { ObjectiveComponent } from './objective/objective.component';
import { FocusComponent } from './focus/focus.component';
import { MediaComponent } from './media/media.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './media/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    DescriptionComponent,
    ObjectiveComponent,
    FocusComponent,
    MediaComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
