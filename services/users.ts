import axios from 'axios';
export const startLogin = (values) => {
 
    return(dispatch, getState) => {
     //console.log('startLogin values', values)
       axios.defaults.baseURL = process.env.AUTH_SERVER || "https://geografia-user-admin.herokuapp.com";
       axios.get("/api/spendmapp_users.json", {
           auth: {
             username: values.userName,
             password: values.password
           }
         })
         .then(response => {
           //console.log('response', response)
           const auth = {
             isLoggedin: true,
             message: response.data,
             code: response.status,
   
           }
           dispatch(login(auth));
           dispatch(push('/economicmodeldashboard'))
         })
         .catch(error => {
           if(error !== undefined) {
             //console.log('error', error.response)
             const auth = {
               isLoggedin: false,
               message: error.response.data,
               code: error.response.status,
             }
             dispatch(login(auth));
           }
   
         });
     };
   }
   