import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { InsertEmployeeDetailComponent } from './views/employee/childcomponent/insert-employee-detail/insert-employee-detail.component';
import { InsertEmployeeInfoComponent } from './views/employee/childcomponent/insert-employee-info/insert-employee-info.component';
import { InsertEmployeeSkillComponent } from './views/employee/childcomponent/insert-employee-skill/insert-employee-skill.component';
import { InsertEmployeeShiftComponent } from './views/employee/childcomponent/insert-employee-shift/insert-employee-shift.component';
import { FooterComponent } from './core/footer/footer.component';
import { FilterComponent } from './views/employee/filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { employeeFeatureKey, employeeIdReducers, employeeReducer, reducers } from './state/employee.reducer';
import { SharedService } from './services/SharedService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    InsertEmployeeDetailComponent,
    InsertEmployeeInfoComponent,
    InsertEmployeeSkillComponent,
    InsertEmployeeShiftComponent,
    FooterComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    StoreModule.forRoot({ employees: reducers, employeeId: employeeIdReducers }),
    StoreModule.forFeature(employeeFeatureKey, employeeReducer)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent ]
})
export class AppModule { }

