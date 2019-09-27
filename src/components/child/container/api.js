export const getPostsApi = async (postNumber) => {

    const post = postNumber ? postNumber : '' 

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)

    return res.json()     
}
