import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-server',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string } | any;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
