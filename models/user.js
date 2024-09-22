import {uuid} from 'uuid';
import {Schema,model,models,mongoose} from 'mongoose';
const schema=new Schema({
    id:{type:String,required:true,default:uuid,v2:true},
    name:{type:String,
        require:true

    },
    userName:{
        type:String,
        require:true,
        unique:true
    }
    ,
    password:{
        type:String,
        require:true,
        select:false,

    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:string,
            required:true
        }
    }
},{
    timestamps:true
})

export const User=model("User",schema)||models.User;