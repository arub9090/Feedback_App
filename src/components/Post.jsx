import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'
function Post() {

    const status=200;
    const navigate= useNavigate();
    if(status===404){
        return <Navigate to='/notfound'/>
    }

    const onClick = () => {
        console.log("Hello I got u");
        navigate('/about');
    }

    return (
        <div>
            <p>Post Here: </p>

            <button onClick={onClick}>Click ME</button>

            <Routes>
            <Route path='/show' element={<h1>Hello World Its Arif Rubayet</h1>}/>

            </Routes>
          
        </div>
    )
}

export default Post
