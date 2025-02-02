import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/components/home-component/home-component.component';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/components/about-me/about-me.component';


@NgModule({
  declarations: [    
    AppComponent,
    HomeComponent,
    AboutMeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
