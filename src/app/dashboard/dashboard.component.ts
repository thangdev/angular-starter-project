import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  mainRobots = []
  robots = []
  searchName = ''
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getRobots()
  }

  getRobots(): void {
    this.heroService.getRobots()
      .subscribe(robotsData => {
        this.robots = robotsData
        this.mainRobots = robotsData
      })
  }

  search(){
    const reg = new RegExp(this.searchName, 'g');
    this.robots = this.robots.filter(bot => reg.test(bot.name))
    console.log(this.robots)
  }

  resetSearch(){
    this.robots = this.mainRobots
    this.searchName = ''
  }


}
