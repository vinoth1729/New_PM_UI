import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { MatToolbarModule,MatTabsModule,MatInputModule,MatOptionModule, MatSelectModule, MatCheckbox, MatDatepickerModule, MatCheckboxModule, DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule, MatSliderModule, MatCardModule, MatButtonModule, MatDialogModule, MatDialogClose, MatDividerModule, MatGridListModule} from '@angular/material';
import { AddUserComponent } from './project-manager/adduser/add-user/add-user.component';
import { AddProjectComponent, DialogOverviewExampleDialog } from './project-manager/add-project/add-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './project-manager/add-task/add-task.component';
import { ViewTaskComponent } from './project-manager/view-task/view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectManagerComponent,
    AddUserComponent,
    AddProjectComponent,
    AddTaskComponent,
    DialogOverviewExampleDialog,
    ViewTaskComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
