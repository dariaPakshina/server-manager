import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Params, CanDeactivate } from '@angular/router';
import { NgIf } from '@angular/common';
import {
  CanDeactivateComponent,
  CanDeactivateGuard,
} from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: { id: number; name: string; status: string } | any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // watch changes in запрос страницы (что в URL)
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();

    const id = this.route.snapshot.params['id'];
    this.route.params.subscribe();
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
