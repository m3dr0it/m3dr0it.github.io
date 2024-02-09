import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Post({params} : {params:{id:string}}){
    const data = await getDataById(params.id);
    const md = atob(data.body);
    return (
    <div className=" w-1/3 mx-auto text-justify h-screen">
        <h1 className=" text-3xl py-5">{data.title}</h1>
        <div className=' text-xl'>
          <MDXRemote source={md}></MDXRemote>
        </div>
    </div>
    )
}

async function getDataById(id:string) {
  const res = await fetch(`${process.env.API_BASE_URL}/posts/`+id,{cache : 'no-store'});
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
     
  return res.json()
  }