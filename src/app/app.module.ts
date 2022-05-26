import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  // declarations[] identifies the components that belong to this module: AppComponent, WelcomeComponent
  declarations: [
    AppComponent,             // The root component
    WelcomeComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,         // Registers the Angular HTTP service provider
    RouterModule.forRoot([    // Passes in the configured routes for the root of the application
      { path: 'welcome', component: WelcomeComponent },           // Configure the default routes
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }    // Configure any wildcard routes
    ]),
    // Then, import each feature module:
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]   // The bootstrap[] identifies the root component declared above
})
export class AppModule { }
