import { Injectable } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { PlanModel, CoordinatesModel, MembersModel, MemberModel } from '../model/plan.model';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpService) { }

  get(): Observable<PlanModel[]> {
    return new Observable((observer) => {
      this.http.get(environment.plans)
        .subscribe(data => {
          observer.next(this.parseData(data));
        }, error => {
          observer.error(error);
        });
    });
  }

  parseData(data: any): PlanModel[] {
    const plans: PlanModel[] = [];

    data.plans.forEach((element: any) => {
      const plan = new PlanModel();
      plan.id = element.id;
      plan.name = element.name;
      plan.date = element.date;
      plan.venue = element.venue;
      plan.initiatedBy = element.initiatedBy;
      plan.coordinates = this.parseCoordinates(element.coordinates);
      plan.members = this.parseMembers(element.members);

      plans.push(plan);
    });

    return plans;
  }

  parseCoordinates(data: any): CoordinatesModel {
    const coordinates = new CoordinatesModel();
    coordinates.lat = data.lat;
    coordinates.long = data.long;
    return coordinates;
  }

  parseMembers(data: any): MembersModel {
    const members = new MembersModel();
    members.mayBe = this.parseMember(data.mayBe);
    members.no = this.parseMember(data.no);
    members.yes = this.parseMember(data.yes);
    return members;
  }

  parseMember(data: any): MemberModel[] {
    const members: MemberModel[] = [];
    data.forEach((element: any) => {
      const member = new MemberModel();
      member.comment = element.comment;
      member.member = element.name;
      members.push(member);
    });
    return members;
  }

}
