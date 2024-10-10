import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string } | any;

  paramsSubscription?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    }); //params - observable, async task
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
  }
}
