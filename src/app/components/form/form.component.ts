import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../classes/custom-validators';
import { HttpClient } from '@angular/common/http';
import { Tweets } from '../../models/tweets';
import { TweetsService } from '../../services/tweets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userForm = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(140),
      ]),
    },
    { asyncValidators: CustomValidators.createValidator(this.http) }
  );

  constructor(
    private http: HttpClient,
    private tweetService: TweetsService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    const tweet: Tweets = {
      email: this.userForm.controls.email.value,
      message: this.userForm.controls.message.value,
    };
    this.tweetService
      .createTweet(tweet)
      .subscribe(() => this.router.navigate(['/tweets', tweet.email]));
  }
}
