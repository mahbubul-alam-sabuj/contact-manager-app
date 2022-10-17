import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactManagerAppComponent } from './contact-manager-app/contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_MODULES } from '../material';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: '',
    component: ContactManagerAppComponent,
    children: [{ path: '', component: MainContentComponent }],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [
    ContactManagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MAT_MODULES,
  ],
  providers: [UserService],
})
export class ContactManagerModule {}
