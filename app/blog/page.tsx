
const Blog = () => {
    return (
        <div>
            <div className="p-6 h-screen">
            <div className=" w-screen md:w-4/5 mx-auto lg:w-1/2">
                <div className="border-b border-gray-400 mb-4"></div>
                <a href="http://localhost:3000/blog/posts/1">
                    <h1 className="text-3xl font-semibold">Post Title</h1>
                    <p>Place holder lorem ipsum bla bla bla</p>
                    <div className="border-b border-gray-400 mt-4"></div>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Blog