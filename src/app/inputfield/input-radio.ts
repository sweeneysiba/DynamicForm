import { InputBase } from './input-base';

export class RadioBase extends InputBase<string> {
  controlType = 'radiobox';
  type = 'string' ;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['options'] || [];
  }
}
