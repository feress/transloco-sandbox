import {Translation, TranslocoService} from '@ngneat/transloco';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  appleCount = 1;
  selectedGender = 'male';
  myTranslatedText: Observable<Translation>;

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
    this.myTranslatedText = this.translocoService.selectTranslate('BasicExamples.Service');
  }

}
