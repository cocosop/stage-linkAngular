import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrl: './nav-home.component.scss'
})
export class NavHomeComponent implements OnInit{
  constructor(private route: ActivatedRoute){
  }
  currentRoute: string;
  ngOnInit(): void {
    this.route.url.subscribe((event) => {
      this.currentRoute=event[0].path;

    });
  }

}
