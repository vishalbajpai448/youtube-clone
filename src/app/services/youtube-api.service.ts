import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://www.googleapis.com/youtube/v3';
  apiKey = 'AIzaSyBnLojQGqcah0dclmP-7Hqp6T_FUPu6SaI';
  channelId = 'UC1_PoxsCQlTLIWNGx2eHO1A';
  maxResults = 10;

  getTrendingVideos(regionCode: string = 'US', maxResults: number = 10): Observable<any> {
    

    return this.http.get(`${this.apiUrl}/videos?key=${this.apiKey}&chart=mostPopular&regionCode=${regionCode}&part=snippet&maxResults=${maxResults}`);
  }


}
