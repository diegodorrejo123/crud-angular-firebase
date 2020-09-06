import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { HeroModel } from '../../models/hero.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: HeroModel[] = [];
  loading = false;
  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    this.loading = true;
    this.HeroService.getHeroes().subscribe(res => {
      this.heroes = res;
      this.loading = false;
    })
  }

  deleteHero(hero: HeroModel, i: number) {
    Swal.fire({
      title: "¿Estás seguro?",
      icon: `question`,
      text: `Esta seguro de que desea borrar a ${hero.name}`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(res => {
      if (res.value) {
        this.heroes.splice(i, 1);
        this.HeroService.deleteHero(hero.id).subscribe();
      }
    })
  }
}
