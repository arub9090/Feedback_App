import {useParams} from 'react-router-dom'
function Post() {
    const params= useParams();
    return (
        <div>
            <p>Post ID: {params.id}</p>
            <p>Post Given by : {params.user_name}</p>
        </div>
    )
}

export default Post
