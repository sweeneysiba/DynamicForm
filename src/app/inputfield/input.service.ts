import { Injectable }       from '@angular/core';

import { RadioBase } from './input-radio';
import { TextBase }     from './input-text';
import { InputBase }  from './input-base';

@Injectable()
export class InputService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getInputs() {

    let inputs: InputBase<any>[] = [

      new RadioBase({
        key: 'gender',
        label: 'gender',      
        order: 4
      }),

      new TextBase({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextBase({
        key: 'Country',
        label: 'Country Name',
        value: 'India',
        required: true,
        order: 3
      }),
      new TextBase({
        key: 'City',
        label: 'City',
        type: 'email',
        order: 2
      })
    ];

    return inputs.sort((a, b) => a.order - b.order);
  }
}

