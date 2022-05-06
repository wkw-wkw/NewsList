import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {getDataList} from "../api/api";

function NewsList(){

    let [domain,setDomain] = useState([]);

    function getData(){
        getDataList().then(res=>{
            setDomain(res.data.result)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            {
                domain.map((value)=>{
                    return(
                        <div>
                            <h1>{value.title}</h1>
                            {
                                value.list.map((v)=>{
                                    return(
                                            <Link to={`/details/${v._id}`}>
                                                <img src={`http://a.itying.com/${v.img_url}`}/>
                                                <p className="title">{v.title}</p>
                                                <p className="price">{v.price}</p>
                                            </Link>
                                        )

                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default NewsList
