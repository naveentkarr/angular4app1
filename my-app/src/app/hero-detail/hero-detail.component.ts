import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from '../hero/hero';
@Component ({
    selector:'hero-detail',
    templateUrl:'./hero-detail.component.html'
})
export class HeroDetailComponent{
    @Input() hero: Hero;
}