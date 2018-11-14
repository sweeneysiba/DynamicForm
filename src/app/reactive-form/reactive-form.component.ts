import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup , FormBuilder, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})


export class ReactiveFormComponent implements OnInit {
  //  employeeForm :FormGroup;

forms=[ {
        field:"name",
        label:"Name",
        value:"",
        required:true,
        input:"text"
      },
      {
        field:"city",
        label:"City",
        value:"",
        required:false,
        input:"text"
      },
      {
        field:"country",
        label:"Country",
        value:"India",
        required:true,
        input:"text"
      },
     {
        field:"gender",
        label:"Gender",
        value:"",
        options:[
                  {
                    label:"Male",
                    Value:"m"
                  },
                  {
                  label:"Female",
                  value:"f"
                  }
                ],
        required:true,
        input:"radio"
      }

   ];
  // constructor(private fb :FormBuilder) { }


  ngOnInit() {
    // this.employeeForm = this.fb.group ({
    //   name : ["",Validators.required],
    //   city : ["",Validators.required],
    //   country : ['India',Validators.required],
    //   gender : ["",Validators.required]  
         
    // });
    // console.log(this.employeeForm.valid);
  }
  // onSubmit():void{
  //   console.log(this.employeeForm.value);
  //   console.log(this.employeeForm.valid);


  // }
 
}
