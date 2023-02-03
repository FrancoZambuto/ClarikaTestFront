import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Members } from '../../models/members';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  member: Members;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private membersService: MembersService
  ) {}

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.getAll('email')[0];
    this.membersService
      .getMemberTweets(this.email)
      .subscribe((member: Members) => {
        this.member = member;
      });
  }
}
