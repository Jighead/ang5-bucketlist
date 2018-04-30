import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* we need this module for aninamtions, first install it via npm.
  npm  install @angular/animations@latest --save
*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// needed for our service
import { DataService } from './data.service';
// needed for our routes
import { AppRoutingModule } from './app-routing.module';
/* we need this module for our form */
import { FormsModule } from '@angular/forms';
// the default main component
import { AppComponent } from './app.component';
// our home component
import { HomeComponent } from './home/home.component';
// our about component
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // added out home componenent
    AboutComponent // added our about componenent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // added forms module
    BrowserAnimationsModule
  ],
  providers: [DataService], // added the data service
  bootstrap: [AppComponent]
})
export class AppModule { }
