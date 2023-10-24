import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-admin-dashboards',
  templateUrl: './admin-dashboards.page.html',
  styleUrls: ['./admin-dashboards.page.scss'],
})
export class AdminDashboardsPage implements OnInit {
  presentingElement: Element | null = null;

  public alertButton = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'OK',
      role: 'Confirm',
    },
  ];

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  data = [
    { value: 230, label: 'Free range chicken' },
    { value: 50, label: 'Cattle' },
    { value: 30, label: 'Swine' },
    { value: 30, label: 'Goat' },
    { value: 130, label: 'Broiler' },
  ];

  private myChart: Chart<'doughnut', (number | string)[]> | null = null; // Store the chart instance

  constructor() {}
  swiperSlideChanged(e: any) {
    console.log('changed :', e);
  }
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.loadData(); // Load the data from localStorage
    this.initializeChart();
  }

  initializeChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  
    if (this.myChart) {
      this.myChart.destroy(); // Destroy the existing chart instance if it exists
    }
  
    const totalValue = this.data.reduce((sum, item) => sum + item.value, 0);
  
    const chartOptions: ChartConfiguration<'doughnut', (number | string)[]> = {
      type: 'doughnut', // Changed chart type to 'doughnut'
      data: {
        labels: this.data.map((item) => `${item.label} (${((item.value / totalValue) * 100).toFixed(1)}%)`), // Show percentage in the labels
        datasets: [
          {
            data: this.data.map((item) => item.value),
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
            ],
          },
        ],
      },
    };
  
    this.myChart = new Chart(ctx, chartOptions) as Chart<'doughnut', (number | string)[]>;
  }

  updateChart() {
    if (this.myChart) {
      this.myChart.data.labels = this.data.map((item) => item.label);
      this.myChart.data.datasets[0].data = this.data.map((item) => item.value);
      this.myChart.update(); // Update the chart with the new data
    }
  }

  saveData() {
    localStorage.setItem('dashboardData', JSON.stringify(this.data));
  }

  loadData() {
    const savedData = localStorage.getItem('dashboardData');
    if (savedData) {
      this.data = JSON.parse(savedData);
    }
  }

  calculateOffspringCount(): number {
    let totalCount = 0;
    for (const item of this.data) {
      totalCount += item.value;
    }
    return totalCount;
  }
}
