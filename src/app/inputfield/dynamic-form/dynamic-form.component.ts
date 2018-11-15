import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../input-base';
import { FormGroup } from '@angular/forms';
import { InputControlService } from '../input-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers:[InputControlService]
})
export class DynamicFormComponent implements OnInit {
  
  @Input() inputs: InputBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private inp: InputControlService) {  }

  ngOnInit() {
    this.form = this.inp.toFormGroup(this.inputs);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
