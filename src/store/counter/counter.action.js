import { COUNTER_ACTION_TYPES } from './counter.types';

export const createAction = (type, payload) => ({ type, payload });

export const increment = () => createAction(COUNTER_ACTION_TYPES.INCREMENT);



// /api call


  export const setLoginStart = () =>
  createAction(COUNTER_ACTION_TYPES.SET_LOGIN_START);
export const setLoginSuccess = (payload) =>
  createAction(COUNTER_ACTION_TYPES.SET_LOGIN_SUCCESS, payload);
export const setLoginFailure = (error) =>
  createAction(COUNTER_ACTION_TYPES.SET_LOGIN_FAILURE, error);
//create a fake api call
const fakeApiCall = ({id,password}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id==='hassan'&& password==='12345') {
        resolve({ status:true,
              
          data:{name:'hassan',phone:'03127059959',email:'wajahathassan9876@gmail.com'} });
      } else {
        reject({status:false,message:'login failed'});
      }
    }, 2000);
  });
};


export const setLoginStartAsync = (data) => {
  return async (dispatch) => {
    dispatch(setLoginStart());
    try {
      const res = await fakeApiCall(data);

      dispatch(setLoginSuccess(res));
    } catch (error) {
      dispatch(setLoginFailure(error));
    }
  };
};
