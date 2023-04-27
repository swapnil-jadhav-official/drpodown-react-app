import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
const initialState ={
    loading : true,
    error : '',
    post : []
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS' :
            return{
                loading : false,
                error : '',
                post : action.payload
            }
        case 'FETCH_ERROR' :
            return{
                loading : false,
                error : 'Something went wrong',
                post : []
            }

        default :
        return state;

    }

}
function App(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
	const posts = state
    useEffect(()=>{
    
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{
    
			console.log(res.data)
            dispatch({type : 'FETCH_SUCCESS', payload : res.data})
            
        })
        .catch(err=>{
            dispatch({type : 'FETCH_ERROR'})
        })
       },[])
    return (
        <div>
            <div>{state.loading ? 'Loading..' : posts.map(post=>(<li>
				
			</li>))}</div>
            <h1>{state.error ? state.error : null}</h1>
        </div>
    );
}

export default App;