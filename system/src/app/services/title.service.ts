import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titleSubject = new BehaviorSubject<string>('Título Padrão');
  title$ = this.titleSubject.asObservable();

  setTitle(title: string): void {
    this.titleSubject.next(title);
  }
  constructor() { }
}
