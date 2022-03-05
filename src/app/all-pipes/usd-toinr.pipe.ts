import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToinr'
})
export class UsdToinrPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 72;
  }

}
