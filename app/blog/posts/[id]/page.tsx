import GetPost from '@lib/reader';
import { MDXRemote } from 'next-mdx-remote/rsc'

export function generateStaticParams() {
  return [{
    id:'1'
  },
  {
    id:'2'
  }];
}

export default async function Page({params} : {params:{id:string}}){
  console.log(params)
    const data = await GetPost(params.id);
    const md = atob(data.body);
    return (
    <div className=" w-1/3 mx-auto text-justify h-screen">
        <h1 className=" text-3xl py-5 font-semibold">{data.title}</h1>
        <div className=' text-xl'>
          <MDXRemote source={md}></MDXRemote>
        </div>
    </div>
    )
}

export const dynamicParams = false;