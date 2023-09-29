const Post = ( {params} ) => {
    console.log(params)
    return ( 
        <div>
            {params.id}
        </div>
    )
}

export default Post