import { Time } from "@angular/common";

export class meeting
{
    constructor(
        public meetingId:number,
        public startTime:Date,
        public endTime:Time,
        public topic:string,
        public agenda:string,
        public minutesOfMeeting:string

){}
}