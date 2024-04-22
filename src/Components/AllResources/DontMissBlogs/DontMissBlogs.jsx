import React from "react";
import cardimg1 from "../Resources2/card1.svg"
import cardimg2 from "../Resources2/card2.svg"
import cardimg3 from "../Resources2/card3.svg"
import { Link } from "react-router-dom";
import { Module1, Module2, Module3, Module4 } from "../AllResourcesData"
function DontMissBlog(ind) {
    let data = [...Module1,...Module2,...Module3,...Module4]
    console.log(data);
    const finalData=[]
    console.log(ind.index)
    if(ind.index.length===1){
        finalData.push(data[ind.index[0]-1])
    }
    else{
        finalData.push(data[ind.index[0]-1])
        finalData.push(data[ind.index[1]-1]) 
    }
    console.log("finalData",finalData)
//     function returnIndexes(index,data){
//         let ind1=null;
//         let ind2= null;
//         if(index == 11 || index == 8){
//             ind1= index-2;
//         }else{
//             ind1 = index-1;
//         }

//         if(index == 9 || index == 6){
//             ind2 = index+2;
//         }else{
//             ind2 = index+1;
//         }
//         let indd1 = index-2;
//         let indd2 = index;
//         // if(index == 6){
//         //     ind2 = index+2;
//         // }else{
//         //     ind2 = index+1;
//         // }
        
//         // if(index == 8){
//         //     ind2 = index-2;
//         // }else{
//         //     ind2 = index-1;
//         // }
        
//         let arr = [];
//         if(ind1){
//             arr.push({...data[indd1],ind:ind1})
//         }
//         if(ind2&&ind2<18){
//             arr.push({...data[indd2],ind:ind2})
//         }

//         console.log("🍕🍕🍔🍔",arr,indd1,indd2)
//         return arr;
//     }
//    let finalData = returnIndexes(index,data);

//     console.log("🍕🍕",index);

    return (
        <>
            <div className='all-resources-box'>
                <div className="row m-auto w-100">
                    <h1 style={{ color: "white" }}>Don’t miss these</h1>
                    <div className="padding-slite"></div>
                    {finalData && finalData.map((item, index) => (
                        <div className="col-lg-6 mb-5" key={index}>
                            <Link to={`/SingleResource${index===0?ind.index[0]:ind.index[1]}`}>
                                <div className='module-box'>
                                    <img src={item.img} alt="" />
                                    <h6>{item.concept}</h6>
                                    <h4>{item.cardTitle}</h4>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
};
export default DontMissBlog;