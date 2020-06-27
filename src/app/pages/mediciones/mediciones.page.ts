import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AlbumService } from 'src/app/services/album.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})

export class MedicionesPage implements OnInit {

  results: Observable<any>;

  constructor(private albumService: AlbumService, private router: Router) {
    this.results = this.albumService.getMeasures();
  }

  ngOnInit() {
  }

  openMedicionInTab(id){
  	this.router.navigateByUrl('/tabs/mediciones/medicion/' + id);
  }
}
