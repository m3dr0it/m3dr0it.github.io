import { connect } from "@lib/mongo";
import PostModel from "@models/post"


export async function GET(req : Request) {
  await connect();
  const post = await PostModel.find({})
  return Response.json(post)
}
