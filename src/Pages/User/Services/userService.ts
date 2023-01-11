import { getReq,postReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";
const {USERSLIST} = apiEndPoints;

export const usersListData = async (page:any,cb:any)=>{
    try {
        let url:any 
        if (page) {
            url = `${USERSLIST}?page=${page}`
        } 
        const result:any = await getReq(url)
        // console.log('result',result.data);
        
        return cb(result)
    } catch (error) {
        console.log('user list error',error);
        
    }
}