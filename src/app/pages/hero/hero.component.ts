import { Component, OnInit } from "@angular/core";
import { HeroModel } from "../../models/hero.model";
import { NgForm } from "@angular/forms";
import { HeroService } from "../../services/hero.service";
import Swal from "sweetalert2";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent implements OnInit {
  hero = new HeroModel();
  message: string;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'new') {
      this.heroService.getHero(id).subscribe((res: HeroModel) => {
        this.hero = res;
        this.hero.id = id;
      });
    }
  }
  saveHero(f: NgForm) {
    if (f.invalid) {
      console.log("Formulario invalido");
      return;
    }
    Swal.fire({
      title: "Espere",
      text: "Guardando datos",
      icon: "info",
      allowOutsideClick: false
    });
    Swal.showLoading();
    let request: Observable<any>;
    if (this.hero.id) {
      request = this.heroService.updateHero(this.hero);
      this.message = "Se han guardado los cambios";
    } else {
      request = this.heroService.createHero(this.hero);
      this.message = "Se guardó el heroe";
    }
    request.subscribe(res => {
      Swal.fire({
        title: this.hero.name,
        text: this.message,
        icon: "success"
      });
    });
  }
}
