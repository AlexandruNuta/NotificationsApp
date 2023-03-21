import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications-app';
  announcement:Announcement[]=[
  {
    id:'1',
    title:"Title1",
    message:"Mesas1",
    author:"Persona1",
    category:{id:"1",name:"Ion"},
    imageUrl:''
  },{
    id:'2',
    title:"Title2",
    message:"Mesas2",
    author:"Persona2",
    category:{id:"2",name:"Maria"},
    imageUrl:''
}
];

  filteredAnnouncements:Announcement[]=this.announcement

  selectedCategory:Category;

  filterAnnouncementBasedOnCategory(category:Category):void{
    if(!category)
    this.filteredAnnouncements=this.announcement;
    else
      this.filteredAnnouncements=
        this.announcement.filter(a=>a.category.name===category.name);
    console.log("Am ajuns in app component cu "+category?.name);
    };
}


