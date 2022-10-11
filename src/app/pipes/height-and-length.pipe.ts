import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'height' })
export class HeightPipe implements PipeTransform {
  transform(size: number) {
    if (size >= 200) {
      return 'High';
    } else if (size < 200 && size > 100) {
      return 'Normal';
    } else {
      return 'Low';
    }
  }
}

@Pipe({ name: 'length' })
export class LengthtPipe implements PipeTransform {
  transform(size: number) {
    if (size >= 1000) {
      return 'Large';
    } else if (size < 1000 && size > 100) {
      return 'Normal';
    } else {
      return 'Small';
    }
  }
}
