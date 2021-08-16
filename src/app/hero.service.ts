import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//サーバからのレスポンス 非同期処理
import { Observable, of } from 'rxjs';

//MessageServiceを注入
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    
  ) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //サーバからのレスポンス 非同期処理
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }

  // HeroService からメッセージを送る
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES); //HEROES→モックヒーロー
  //   this.messageService.add('HeroService: fetched heroes 文字列'); //messageService呼び出し
  //   return heroes;
  // }

  /** サーバーからヒーローを取得する */
  getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  /** HeroServiceのメッセージをMessageServiceを使って記録 */
  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
  }

  private heroesUrl = 'api/heroes';  // Web APIのURL


}
