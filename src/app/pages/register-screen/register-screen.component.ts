import { Component, NgModule, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AddRegisterRequest } from '../models/add-register-request.model';
import { RegisterService } from '../services/register.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register-screen',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css',
})

export class RegisterScreenComponent implements OnDestroy {

  model : AddRegisterRequest;

  private addRegisterSubscription? : Subscription

  constructor(private registerService: RegisterService){
    this.model = {
      email : '',
      iDnum : '',
      name : '',
      surname : '',
    };
  }
  
  onFormRegister(){
    this.addRegisterSubscription = this.registerService.AddRegister(this.model).subscribe(
      res => {
        console.log('Saved to the DB Successfully!!');
      },
      error => {
        console.log('Error: Could not save to the DB!!!');
      }
    )
  }
  
  ngOnDestroy(): void {
    this.addRegisterSubscription?.unsubscribe();
  }
}
