export class PlanModel {
    id: number;
    name: string;
    date: string;
    venue: string;
    coordinates: CoordinatesModel;
    members: MembersModel;
    initiatedBy: string;
}

export class CoordinatesModel {
    lat: number;
    long: number;
}

export class MembersModel {
    yes: MemberModel[];
    no: MemberModel[];
    mayBe: MemberModel[];
}

export class MemberModel {
    member: number;
    comment: string;
}
