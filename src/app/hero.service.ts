import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//サーバからのレスポンス 非同期処理
import { Observable, of } from 'rxjs';

//MessageServiceを注入
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //サーバからのレスポンス 非同期処理
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
