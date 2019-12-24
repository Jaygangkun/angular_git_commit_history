import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GitApiService {

  urlCommits: string = 'https://api.github.com/repos/jaygangkun/angular_git_commit_history/commits';

  constructor(private httpClient: HttpClient) {
    
  }

  public getCommitsHistory(){
    return this.httpClient.get(this.urlCommits);
  }
}
