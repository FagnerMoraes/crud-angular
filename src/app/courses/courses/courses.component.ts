import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Course } from './../model/course';
import { CousesService } from './../services/couses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses: Course[] = [];
  displayedColumns = ['name','categoria'];

  //CousesService: CousesService;

  constructor(

    private CousesService: CousesService,
    public dialog: MatDialog
     ) {
    //this.courses = [];
    //this.CousesService = new CousesService();
    this.courses$ = this.CousesService.list()
    .pipe(
      catchError(error => {
        this.OnError('Erro ao carregar dados')
        return of([])
      })
    );
   }


   OnError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
