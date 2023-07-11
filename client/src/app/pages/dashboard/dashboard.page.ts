import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Chart, ChartConfiguration, ChartTypeRegistry } from 'chart.js';
import { DashboardModalComponent } from '../../components/dashboard-modal/dashboard-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  data = [
    { value: 0, label: 'Free range chicken' },
    { value: 1, label: 'Cattle' },
    { value: 0, label: 'Swine' },
    { value: 1, label: 'Goat' },
    { value: 0, label: 'Broiler' },
  ];

  private myChart: Chart<'pie', (number | string)[]> | null = null; // Store the chart instance

  constructor(
    private menuController: MenuController,
    private modalController: ModalController
  ) {}

  openMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }

  async dashboardOpenModal() {
    const modal = await this.modalController.create({
      component: DashboardModalComponent,
      componentProps: {
        data: this.data,
      },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      this.data = data;
      this.updateChart(); // Update the chart when data changes
      this.saveData(); // Save the data to localStorage
    }
  }

  ngOnInit() {
    this.loadData(); // Load the data from localStorage
    this.initializeChart();
  }

  ngOnDestroy() {
    if (this.myChart) {
      this.myChart.destroy(); // Destroy the chart instance when the component is destroyed
    }
  }

  initializeChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (this.myChart) {
      this.myChart.destroy(); // Destroy the existing chart instance if it exists
    }

    const chartOptions: ChartConfiguration<'pie', (number | string)[]> = {
      type: 'pie',
      data: {
        labels: this.data.map((item) => item.label),
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

    this.myChart = new Chart(ctx, chartOptions) as Chart<
      'pie',
      (number | string)[]
    >;
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
