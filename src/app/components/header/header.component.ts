import {Component, OnInit} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLanguage = 'en-GB';

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
  }

  changeLanguage(e): void {
    this.translocoService.setActiveLang(this.selectedLanguage);
  }

}
