import { Tweets } from './tweets';

export interface Members {
  email: string;
  password: string;
  fullName: string;
  tweets: Tweets[];
}
