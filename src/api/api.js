import axios from "axios";
export const getDataList = params=>{
    return axios.get('http://a.itying.com/api/productlist',{params:params})
}
export const getDataNewsList = params=>{
    return axios.get('http://a.itying.com/api/productcontent',{params:params})
}
