import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentComponent } from './material-component/material-component.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { TodoListAppComponent } from './todo-list-app/todo-list-app.component';
import { TodoInputComponent } from './todo-list-app/todo-input/todo-input.component';
import { TodoOutputComponent } from './todo-list-app/todo-output/todo-output.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsdToinrPipe } from './all-pipes/usd-toinr.pipe';



@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    DatabindingComponent,
    ParentComponent,
    ChildComponent,
    UserFormComponent,
    MaterialComponentComponent,
    TodoListAppComponent,
    TodoInputComponent,
    TodoOutputComponent,
    PipesComponent,
    UsdToinrPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
