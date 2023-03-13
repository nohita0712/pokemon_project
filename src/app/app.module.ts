import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ServiceModule } from './service/service.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './search-filter.pipe';
import { FilterAbilityPipe } from './search-ability.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentPageComponent,
    FilterPipe,
    FilterAbilityPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
