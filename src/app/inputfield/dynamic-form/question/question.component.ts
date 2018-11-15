import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { InputBase } from '../../input-base';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() input: InputBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.input.key].valid; }
}
