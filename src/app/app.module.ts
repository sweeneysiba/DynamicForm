import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextfieldComponent } from './reactive-form/textfield/textfield.component';
import { RadiofieldComponent } from './reactive-form/radiofield/radiofield.component';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { DynamicFormComponent } from './inputfield/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent} from './inputfield/dynamic-form/question/question.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TextfieldComponent,
    RadiofieldComponent,
    InputfieldComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
