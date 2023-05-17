import { HydratedDocument, Model } from "mongoose";

export interface Iuser {
    name:string, 
    age:number, 
    gender:"male"| "female", 
    permanent_address?:string, 
    pressent_address:string, 
    email:string, 
    is_married:boolean; 
    experience:string, 
    skills:{
        js:"pro" | "good" | "noob", 
        ts:"pro" | "good" | "noob"
    }, 

}

export interface IMethods {
    u_identity():string, 
}
// !un 
export interface UserModel extends Model<Iuser,{}, IMethods>{
    // !un  
        get_admin_users():Promise<HydratedDocument<Iuser, IMethods>>
}