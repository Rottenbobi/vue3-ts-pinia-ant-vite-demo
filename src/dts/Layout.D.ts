export interface IrouterList {
    component:string;
    hidden:boolean;
    path:string;
    meta:Imeta;
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