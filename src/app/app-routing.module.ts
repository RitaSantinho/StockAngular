import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{BrowserModule} from '@angular/platform-browser';
import{AppComponent} from './app.component';
import{FormsModule} from '@angular/forms';

const routes: Routes = [];

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],

  providers:[],
  bootstrap:[AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
