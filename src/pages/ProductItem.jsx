import { Fragment } from "react"
export function ProductItem(props){
    return (<Fragment>
      <div className="product-item" >

        <div className="product-image">
         <img src={props.data.thumbnail} alt="" srcset="" />
        </div>
        <h2>{props.data.title}</h2>
        <h4>$ {props.data.price}</h4>

      </div>
    </Fragment>);
}