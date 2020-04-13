import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  robot = {}

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRobots();
  }


  getRobots(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getRobot(id)
      .subscribe(robotData => this.robot = robotData);
  }

  goBack(): void {
    this.location.back();
  }
}
