import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HeroModel } from "../models/hero.model";
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  private url = "https://login-app-7f35e.firebaseio.com";
  constructor(private http: HttpClient) {}

  createHero(hero: HeroModel) {
    return this.http.post(`${this.url}/heroes.json`, hero).pipe(
      map((res: any) => {
        hero.id = res.name;
        return hero;
      })
    );
  }

  updateHero(hero: HeroModel) {
    const heroTemp = {
      ...hero,
    };
    delete heroTemp.id;
    return this.http.put(`${this.url}/heroes/${hero.id}.json`, heroTemp);
  }

  deleteHero(id: string) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`).pipe(
      map(this.createArray)
    );
  }

  getHero(id:string) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  private createArray(heroObj: object) {
    if (heroObj == null) { return [];}
    const heroes: HeroModel[] = [];

    Object.keys(heroObj).forEach(key => {
      const hero: HeroModel = heroObj[key];
      hero.id = key;
      heroes.push(hero);
    })
    return heroes;
  }
}
