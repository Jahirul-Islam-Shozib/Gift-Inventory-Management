import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { AuthService } from './authentication/auth.service';
//import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
//import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignupComponent } from './authentication/signup/signup.component';
import { MenubarComponent } from './components/menubar/menubar.component';

import { DsoCardComponent } from './all-cards/dso-card/dso-card.component';
import { AllDepotsInfoComponent } from './components/all-depots-info/all-depots-info.component';
import { DepotInfoModalComponent } from './all-modal/depot-info-modal/depot-info-modal.component';
import { BudgetComponent } from './components/budget/budget.component';
import { HttpClientModule } from '@angular/common/http';
import { DepotBudgetComponent } from './DepotManagement/depot-budget/depot-budget.component';
import { ShowBudgetComponent } from './components/budget/show-budget/show-budget.component';
import { InventoryComponent } from './components/Inventory/inventory.component';
import { InventoryStoreTableComponent } from './All-tables/inventoryStore-table/inventoryStore-table.component';
import { InventoryUserComponent } from './components/inventory-user/inventory-user.component';
import { InventoryUserModalComponent } from './all-modal/inventory-user-modal/inventory-user-modal.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolbarComponent,
    SignupComponent,
    InventoryComponent,
    MenubarComponent,
    InventoryStoreTableComponent,
    DsoCardComponent,
    AllDepotsInfoComponent,
    DepotInfoModalComponent,
    BudgetComponent,
    DepotBudgetComponent,
    ShowBudgetComponent,
    InventoryUserComponent,
    InventoryUserModalComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [AuthService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
