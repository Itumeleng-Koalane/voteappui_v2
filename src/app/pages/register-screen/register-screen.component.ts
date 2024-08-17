import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AddRegisterRequest } from '../models/add-register-request.model';
import { RegisterService } from '../services/register.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register-screen',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    HttpClient,
    NgModule
  ],
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css',
})

export class RegisterScreenComponent {

  model : AddRegisterRequest;

  constructor(private registerService: RegisterService){
    this.model = {
      email : '',
      iDnum : '',
      name : '',
      surname : '',
    };
  }

  onFormRegister(){
    this.registerService.AddRegister(this.model).subscribe({
      next: (response) => {

      }
    });
  }
}


