import { Component, OnInit } from '@angular/core';
import { GitApiService } from './gitapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'angulargitapi';
  commits = null;

  constructor(private gitApiService: GitApiService){
    
  }
  ngOnInit(){
    this.gitApiService.getCommitsHistory().subscribe((res) => {
      this.commits = res;
      console.log(this.commits);
    })    
  }

  public convertDate(date){
    return new Date(date);
  }
}
