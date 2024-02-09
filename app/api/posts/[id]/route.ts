import Post from '@app/blog/posts/[id]/page';
import { promises as fs } from 'fs';

type PostType = {
  id : number,
  title : string,
  body : string
}

type Posts = [
  PostType
]

export async function GET(request : Request, {params} :{params:{id:string}}) {
  const file = await fs.readFile(process.cwd() + '/posts.json', 'utf8');
  const posts = JSON.parse(file) as Posts;

  var result:PostType={id:0,title:"",body:""}
  for(const post of posts ){
    if(post.id == parseInt(params.id)){
      result = post
    }
  }
  
  return Response.json(result)
  }