import _ from 'underscore'
import axios from 'axios';

interface Authentication {
    authentication: boolean,
    client_name: string
  }

export const signIn = async (username: string, password: string): Promise<Authentication> =>  {
    axios.defaults.baseURL =  process.env.AUTH_SERVER || "https://geografia-user-admin.herokuapp.com";
    try {
        const res = await axios.get("/api/spendmapp_user.json", {
            auth: {
              username: username,
              password: password
            }
        })
        const data = res.data
        console.log('data', data)  
        return {
            authentication: true,
            client_name: data.name
        }
    } catch(err) {
        //console.log('error', err)
        return {
            authentication: false,
            client_name: username
        }
        
    }

  }