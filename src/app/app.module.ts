import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { InsertEmployeeDetailComponent } from './views/employee/childcomponent/insert-employee-detail/insert-employee-detail.component';
import { InsertEmployeeInfoComponent } from './views/employee/childcomponent/insert-employee-info/insert-employee-info.component';
import { InsertEmployeeSkillComponent } from './views/employee/childcomponent/insert-employee-skill/insert-employee-skill.component';
import { InsertEmployeeShiftComponent } from './views/employee/childcomponent/insert-employee-shift/insert-employee-shift.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    InsertEmployeeDetailComponent,
    InsertEmployeeInfoComponent,
    InsertEmployeeSkillComponent,
    InsertEmployeeShiftComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
