const PostPage = ({repo}) => {
    console.log(repo)
    return ( 
        <div>
            Post
        </div>
    )
}

export default PostPage

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
}