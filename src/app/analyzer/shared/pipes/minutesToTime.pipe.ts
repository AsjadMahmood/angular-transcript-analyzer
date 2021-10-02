import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert Minutes To Time
*/
@Pipe({name: 'mins2Time'})
export class MinutesToTime implements PipeTransform {
  transform(totalMinutes:number): string {
    let time
    if(totalMinutes < 60){
      time= '00 : ' + (totalMinutes > 10 ? totalMinutes : '0'+ totalMinutes.toString());
    }
    else{
      let hours = Math.floor(totalMinutes / 60);          
      let minutes = totalMinutes % 60;
      time = (+hours > 10 ? hours : '0'+ hours.toString()) + ' : ' + (+minutes > 10 ? minutes : '0'+ minutes.toString())
    }
    return time;
  }
}