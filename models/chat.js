import {uuid} from 'uuid';
import {Schema,Types,model,models,mongoose} from 'mongoose';
const schema=new Schema({
    id:{type:String,required:true,default:uuid,v2:true},
    name:{type:String,
        require:true

    },
    groupChat:{
        type:Boolean,
        default:false,
    },
    creator:{
        type:Types.ObjectId,
        ref:"User"
    },
    members:[{
        type:Types.ObjectId,
        ref:"User"
    }],
},{
    timestamps:true
})

export const Chat=model("Chat",schema)||models.Chat;