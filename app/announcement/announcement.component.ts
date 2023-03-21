import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
@Input() message:string;
@Input() title:string;
@Input() author:string;
}
