import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'; //代わりに追加


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // heroes = HEROES;
  heroes: Hero[] = []; //代わりに宣言
  
  constructor(private heroService: HeroService) {}

  ngOnInit() {
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

}
