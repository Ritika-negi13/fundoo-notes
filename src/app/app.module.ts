import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component'
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OpensidebarService } from './service/opensidebar/opensidebar.service';
import { NotesComponent } from './dashboard/notes/notes.component';
import { RemindersComponent } from './dashboard/reminders/reminders.component';
import { HttpclientService } from './service/httpclient/httpclient.service';
import { TrashComponent } from './dashboard/trash/trash.component';
import { ArchiveComponent } from './dashboard/archive/archive.component';
import { SearchPipe } from './pipe/searchpipe/search.pipe';
import { SearchService } from './service/search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BasicinfoComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    NotesComponent,
    RemindersComponent,
    TrashComponent,
    ArchiveComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [OpensidebarService,HttpclientService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
