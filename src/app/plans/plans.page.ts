import { Component, OnInit } from '@angular/core';
import { PlansService } from './service/plans.service';
import { PlanModel } from './model/plan.model';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {
  private plans: PlanModel[] = [];
  constructor(private plansService: PlansService) { }

  ngOnInit() {
    this.plansService.get()
      .subscribe(data => {
        console.log('PlansPage::get data: ', data);
        this.plans = data;
      }, error => {
        console.error('PlansPage::get error: ', error);
      });
  }

  clickCard(plan: PlanModel) {
    alert('Wat for details: ' + plan.name);
  }

}
