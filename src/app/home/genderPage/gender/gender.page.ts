import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToSocial() {
    this.router.navigate(['/social'])

  }

}
