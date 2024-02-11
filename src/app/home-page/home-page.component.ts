import { Component } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  videos!:any[];

  constructor(private youtubeApi:YoutubeApiService){
    this.youtubeApi.getTrendingVideos("IN",20).subscribe((data)=>{
      this.videos = data.items;
      console.log(data);
    })
  }

}
