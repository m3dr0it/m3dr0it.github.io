import { promises as fs } from "fs";

type PostType = {
  id: number;
  title: string;
  body: string;
  placeholder : string;
  coverUrl : string;
  publishAt : string;
};

type Posts = [PostType];

const Blog = async () => {
  const file = await fs.readFile(process.cwd() + "/posts.json", "utf8");
  const posts = JSON.parse(file) as Posts;

  return (
    <>
      <div className="p-6 h-screen">
        <div className=" w-screen md:w-4/5 mx-auto lg:w-1/2">
          <div className="border-b border-gray-400 mb-4"></div>
          {posts.map((post)=>{
            return (
                <a href={process.env.HOST + "/blog/posts/" + post.id}>
                <div className="flex flex-row mt-4">
                    <img
                      className="mx-2 hover:placeholder:Test"
                      src={post.coverUrl}
                      height={59}
                      width={59}
                    />
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold">{post.title}</h1>
                        <p>{post.placeholder}</p>
                        <p className=" font-extralight text-sm italic">published at {post.publishAt} </p>
                    </div>
                </div>
                <div className="border-b border-gray-400 mt-4"></div>
              </a>
            )
          })}

        </div>
      </div>
    </>
  );
};

export default Blog;
