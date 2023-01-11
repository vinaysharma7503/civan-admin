import { getReq,postReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";
const {DASHBOARD} = apiEndPoints;

export const dashboardData = async (cb:any)=>{
    try {
        let url:any 
            url = `${DASHBOARD}`
        const result:any = await getReq(url)
        // console.log('result',result.data);
        
        return cb(result)
    } catch (error) {
        console.log('dashboard data error',error);
        
    }
}