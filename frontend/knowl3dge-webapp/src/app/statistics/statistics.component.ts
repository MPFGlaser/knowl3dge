import { ArticleService } from './../services/article.service';
import { StatisticsDataPoint } from './../interfaces/statisticsDataPoint';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  data: StatisticsDataPoint[] = [];

  displayedColumns: string[] = ['title', 'favourites'];
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private articleService: ArticleService) {}

  async ngOnInit(): Promise<void> {
    this.data = await this.articleService.getFavouriteStatistics().toPromise();
  }
}
