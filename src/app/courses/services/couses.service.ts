import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CousesService {

  //private readonly API = '/assets/Cursos.json';
  private readonly API = 'https://localhost:7063/api/curso';

  constructor(private httpClient: HttpClient) { }

  list(){
   return this.httpClient.get<Course[]>(this.API)
   .pipe(
    first(),
    //delay(1000),
    tap(Course => console.log(Course))
   );
  }

}
