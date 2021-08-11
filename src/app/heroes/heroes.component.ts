import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// import { HEROES } from '../mock-heroes'; HeroSetviceに変更のため削除
import { HeroService } from '../hero.service';


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

  // heroes = HEROES; HeroSetviceに変更のため削除
  heroes: Hero[] = []; //変更後

  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // getHeroesを呼び出し
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
