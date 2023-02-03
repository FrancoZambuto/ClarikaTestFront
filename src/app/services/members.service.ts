import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { Members } from '../models/members';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private baseUrl = config.baseUrl;

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Members[]>(this.baseUrl + '/Members');
  }

  getMemberTweets(email: string) {
    return this.http.get<Members>(
      `${this.baseUrl}/Members/member-tweets?email=${email}`
    );
  }
}
