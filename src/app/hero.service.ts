import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./interfaces/hero";
import { MessageService } from "./message.service";
import { HEROES } from "./some-data/mock-heroes";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
