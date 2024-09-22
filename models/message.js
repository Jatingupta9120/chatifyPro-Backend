import {uuid} from 'uuid';
import {Schema,Types,model,models,mongoose} from 'mongoose';
const schema=new Schema({
    id:{type:String,required:true,default:uuid,v2:true},
    content:{type:String},
    attachmentId:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:string,
            required:true
        }
    },
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true
    },
    chat:{
        type:Types.ObjectId,
        ref:"Chat",
        require:true
    },
},{
    timestamps:true
})

export const Message=model("Message",schema)||models.Message;