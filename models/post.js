import  {Schema, model } from "mongoose";

const PostSchema = new Schema({
  id: String,
  title: String,
  category: String,
  placeHolder : String,
  coverUrl : String,
  tags : [String],
  publishAt : String,
  body : String
});

const postModel = model.post != undefined ? model.post : model('post',PostSchema)

export default postModel