import { getReq,postReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";
const {QRTAGLIST} = apiEndPoints;

export const qrListData = async (page:any,cb:any)=>{
    try {
        let url:any 
        if (page) {
            url = `${QRTAGLIST}?page=${page}`
        } 
        const result:any = await getReq(url)
        // console.log('result',result.data);
        
        return cb(result)
    } catch (error) {
        console.log('qr list error',error);
        
    }
}