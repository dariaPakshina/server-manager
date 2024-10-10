import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ServerComponent } from './server/server.component';
import { NgFor } from '@angular/common';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [NgFor, ServerComponent, EditServerComponent, RouterLink],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
