import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-test-charts',
  templateUrl: './test-charts.component.html',
  styleUrls: ['./test-charts.component.scss']
})
export class TestChartsComponent implements OnInit {
  // variabelen
  charts = [];

  constructor() {}

  ngOnInit(): void {
    this.charts.push(new Chart('canvas1', {
      type: 'bar',
      data: {
        labels: ['poll.pollOptions[0].content', 'poll.pollOptions[1].content'],
        datasets: [{
          label: '1',
          data: [25, 20],
          backgroundColor: [
            'rgba(52, 217, 118, 1)',
            'rgba(217, 63, 52, 1)',
          ],
          borderColor: [
            'rgba(52, 217, 118, 1)',
            'rgba(217, 63, 52, 1)',
          ],
        }, ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
          }, 
        ],
        },
      },
    })
    ) 
  }
}
