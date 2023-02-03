import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Tweets } from '../models/tweets';

@Injectable({
  providedIn: 'root',
})
export class TweetsService {
  private baseUrl = config.baseUrl;

  constructor(private http: HttpClient) {}

  getTweets() {
    return this.http.get<Tweets[]>(this.baseUrl + '/Tweets');
  }

  createTweet(tweet: Tweets) {
    return this.http.post<Tweets>(this.baseUrl + '/Tweets', tweet);
  }
}
