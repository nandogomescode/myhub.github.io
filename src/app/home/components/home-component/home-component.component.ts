import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})

export class HomeComponent { 

  constructor(

    private redirect: Router

  ) { }

  ngOnInit() {

  }

  public redirectPage(): void{
    
    this.redirect.navigate(['./about-me']);

  }

}
