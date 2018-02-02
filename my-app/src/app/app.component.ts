import {Component, OnInit} from '@angular/core';
import { Hero } from './hero/hero';
import {HeroService} from './hero/hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    heroes:Hero[];
    title = 'angular 5 app';
    selectedHero: Hero;
   constructor(private heroService: HeroService) { }
     getHeroes():void{
         this.heroService.getHeroesSlowly().then(heroes => {
             this.heroes = heroes
         },error => {
             console.log(error)
         });
     }
     ngOnInit():void{
         this.getHeroes();
     }
    heroCLick(data: Hero): void {
        this.selectedHero=data;
            console.log(data);
    }
}

