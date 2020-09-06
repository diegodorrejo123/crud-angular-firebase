export class HeroModel{
  id: string;
  name: string;
  power: string;
  alive: boolean;

  constructor() {
    this.alive = true;
  }
}