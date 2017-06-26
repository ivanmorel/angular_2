import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  constructor(private heroService: HeroService) { }
  test = new TestService();
  title = 'CHUBBY CHAN';
  heroes: Hero[];
  selectedHero: Hero;
  switched = 'nice';
  plural = 3;
  num = 0;
  num2 = 0;
  arrayed = [];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes();
    this.num = this.heroService.getOne();
    this.num2 = this.test.getTwo();
  }
}


