import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { forkJoin, throwError } from 'rxjs';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  name = 'akshat202002';
  users$: any;
  rateLimit$: any;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.getRateLimit();
  }

  test(): void {
    console.log(this.name);
    this.getRateLimit();
    this.users$ = this.http
      .get(`https://api.github.com/search/users?q=${this.name}&per_page=10`)
      .pipe(
        map((res: any) => res.items),
        mergeMap((users: any[]) =>
          this.fetchReposForUsers(users).pipe(
            map((repos: any[]) => this.assignReposToUsers(users, repos)),
            catchError((error: any) => {
              console.error('Error fetching repositories:', error);
              return throwError('Failed to fetch repositories. Please try again later.');
            })
          )
        ),
        catchError((error: any) => {
          console.error('Error fetching users:', error);
          return throwError('Failed to fetch users. Please try again later.');
        })
      );
  }

  getRateLimit(): void {
    this.rateLimit$ = this.http.get('https://api.github.com/rate_limit');
    this.rateLimit$.subscribe((response: any) => {
      console.log('Rate Limit:', response);
    });
  }

  fetchReposForUsers(users: any[]): any {
    const repoRequests = users.map((user: any) =>
      this.http.get(`https://api.github.com/users/${user.login}/repos`).pipe(map((res: any) => res))
    );
    console.log('repo request', repoRequests);
    console.log('After fork repo request', forkJoin(repoRequests));
    return forkJoin(repoRequests);
  }

  assignReposToUsers(users: any[], repos: any[]): any[] {
    console.log('users', users);
    console.log('repos', repos);
    return users.map((user: any, index: number) => {
      user.repos = repos[index];
      return user;
    });
  }
}
