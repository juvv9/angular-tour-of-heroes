import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//サーバからのレスポンス 非同期処理
import { Observable, of } from 'rxjs';

//MessageServiceを注入
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';



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
    .pipe(
      tap(heroes => this.log('fetched heroes'),
      catchError(this.handleError<Hero[]>('getHeroes', []))
  );
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

  /**
 * 失敗したHttp操作を処理します。
 * アプリを持続させます。
 * @param operation - 失敗した操作の名前
 * @param result - observableな結果として返す任意の値
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: リモート上のロギング基盤にエラーを送信する
    console.error(error); // かわりにconsoleに出力

    // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
    this.log(`${operation} failed: ${error.message}`);

    // 空の結果を返して、アプリを持続可能にする
    return of(result as T);
  };
}


}
