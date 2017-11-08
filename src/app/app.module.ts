import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatCommonModule} from '@angular/material/core';
import { AppComponent } from './app.component';
import { DetecteursComponent } from './detecteurs/detecteurs.component';
import { HttpModule } from '@angular/http';

import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DetecteursComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    HttpModule,
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
