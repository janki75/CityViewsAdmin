

export class meeting
{
    constructor(
        public meetingId:number,
        public startTime:Date,
        public endTime:Date,
        public topic:string,
        public agenda:string,
        public minutesOfMeeting:string

){}
}