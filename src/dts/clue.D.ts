export interface IclueList {
    pageNum:number,
    pageSize: number,
    beginCreateTime?:string,
    endCreateTime?:string
}
export interface params {
    beginCreateTime?:string,
    endCreateTime?:string
}

export interface IclueList1 {
    activityId: number;
    age: number;
    assignBy: string;
    channel: string;
    createBy: string;
    createTime: string;
    falseCount: number;
    id: number;
    name: string;
    owner: string;
    ownerTime: string;
    phone: string;
    qq: string;
    sex: string;
    status: string;
    weixin: string;
}