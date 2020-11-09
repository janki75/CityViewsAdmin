

export class complaint_Class
{
    constructor(
        public id:number,
        public date:Date,
        public description:string,
        public upVote:number,
        public downVote:number,
        public status:number,
        public ownerId:number,
        public name?:string

){}
}

