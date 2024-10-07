import { useState } from "react";
import { useEffect } from "react";
import { ProductItem } from "./ProductItem";
export function Products(){
   
    const [data, setData] = useState([]);
    const url = "https://dummyjson.com/products";

    const fetchInfo = () => {
        return fetch(url)
          .then((res) => res.json())
          .then((d) => setData(d["products"]))
      }
    
    
      useEffect(() => {
        fetchInfo();
        console.log(data);
      }, []);
    
    return (<>
     <h1>Products</h1>
    <div className="product-container">
       

        {data.map((d)=><ProductItem data={d}/>)}
    </div>
    </>);
}