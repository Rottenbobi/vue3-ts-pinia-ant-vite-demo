export interface IrouterList {
    component:any;
    hidden?:boolean;
    path:string;
    meta?:Imeta;
    name?:string;
    children?:Array<IrouterList>
}

export interface IrouterList1 {
    component:any;
    hidden?:boolean;
    path:string;
    meta?:Imeta;
    name?:string;
    children:Array<IrouterList>
}

interface Imeta { 
    icon:string;
    noCache:boolean;
    title:string;
}

export interface Iuser {
    nickName:string;
}

