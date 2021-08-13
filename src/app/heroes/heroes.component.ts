import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// import { HEROES } from '../mock-heroes'; HeroSetviceに変更のため削除
import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';



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

  selectedHero?: Hero;

  // heroes = HEROES; HeroSetviceに変更のため削除
  heroes: Hero[] = []; //変更後

  
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    ) { }

  ngOnInit() {
    // getHeroesを呼び出し
    this.getHeroes();
  }

  
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} 文字列2`);
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}