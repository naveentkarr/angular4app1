
import {Component, OnInit, TemplateRef} from '@angular/core';
import {Hero} from '../hero/hero';
import {HeroService} from '../hero/hero.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'myapp-heroes',
    templateUrl: './heroes.html',
    styleUrls: ['./heroes.css'],
    providers: [HeroService, BsModalService]
})

export class HeroesComponent implements OnInit {
    modalRef: BsModalRef;
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
    heroes: Hero[];
    title = 'angular 5 app';
    selectedHero: Hero;
    constructor(private heroService: HeroService, private modalService: BsModalService) {

    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => {
            this.heroes = heroes
        }, error => {
            console.log(error)
        });
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    heroCLick(data: Hero): void {
        this.selectedHero = data;
        console.log(data);
    }
}
