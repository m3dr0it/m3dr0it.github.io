export default function Post( {repo} ){
    const data = getData()
    console.log(data)
    return ( 
        <div>
            {data}
        </div>
    )
}

export async function getData() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return repo
}
