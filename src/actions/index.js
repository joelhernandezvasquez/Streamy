

import stream from '../apis/stream';
import history from '../history';


export const signIn = (userId) =>{
    return{
        type: 'SIGN_IN',
        payload:userId
    }
}

export const signOut = () =>{
   return{
       type:'SIGN_OUT'
   }
}

export const createStream = (formValues) =>{
  return async (dispatch,getState) =>{
      const {userId} = getState().auth;
     const response = await stream.post('/streams',{...formValues,userId});
     dispatch({type:'CREATE_STREAM', payload:response.data});

     history.push("/");

  }
}

export const fetchStreams = () =>{
    return async (dispatch) =>{
        const response = await stream.get('/streams');
        dispatch({type:'FETCH_STREAMS', payload:response.data});
    }
}

export const fetchStream = (id) =>{
  return async(dispatch) =>{
      const response = await stream.get(`/streams/${id}`);
      dispatch({type:'FETCH_STREAM',payload:response.data})
  }
}

export const editStream =(id,formValues) =>{
    return async(dispatch) =>{
        const response  = await stream.patch(`streams/${id}`,formValues);
        dispatch({type:'EDIT_STREAM',payload:response.data});

        history.push("/");
    }
}

export const deleteStream =  (id) =>{
    return async(dispatch) =>{
       await stream.delete(`streams/${id}`);
       dispatch({type:'DELETE_STREAM',payload:id})
    }
}