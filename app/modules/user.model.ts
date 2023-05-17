import { Schema, model } from "mongoose";
import { IMethods, Iuser, UserModel } from "../Interface/user.interface";

let user_schema = new Schema<Iuser,UserModel, IMethods>({
    name:{
        type:String, 
        unique:true, 
        maxlength:10, 
        minlength:2, 
        required:true, 
        trim:true, 
        default:"chk_default_name", 

    }, 
    gender:{
        type:String, 
        enum:['male', 'female']
    }, 
    age:{
        type:Number, 
        required:true, 
        min:18, 
        max:60, 
    }, 
  pressent_address:{
    type:String, 
        required:true, 
        trim:true,
  }, 
  email:{
    type:String, 
    trim:true, 
}, 
is_married:true, 
// experience //! for chk not giving experience 
skills:{
    js:String, 
    // ts:String, //! for chk ts not provided
}

})

const User = model('User', user_schema)
// const User = model<IUser, UserModel>("User", userSchema); //! chk not provided
export default User;