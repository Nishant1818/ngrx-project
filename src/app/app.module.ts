import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ContainerComponent } from './container/container.component';
import { usersReducer } from './users.reducer';
import { UsersEffects } from './users.effects';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    ContainerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ users: usersReducer }),
    EffectsModule.forRoot([UsersEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
