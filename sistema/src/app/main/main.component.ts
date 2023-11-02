import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);

constructor(private titleService: TitleService) {}
  title = 'Título Padrão';

  ngOnInit(): void {
    this.titleService.title$.subscribe(newTitle => {

      this.title = newTitle;

    });
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
