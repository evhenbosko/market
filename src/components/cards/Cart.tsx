import {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FcLikePlaceholder} from "react-icons/fc";
import { FcLike} from "react-icons/fc";
import { useAppDispatch } from '../../hooks/redux';

import { gsap } from 'gsap';


function Cart(props:any) {
  const [like,setLike]=useState(false);
  const dispatch =useAppDispatch()

  
  const buyAnimate=()=>{
    gsap.fromTo('.'+classes.buy,{scale:0.5},{scale:1,duration:0.5})
  }
  const likeAnimate=()=>{
    gsap.fromTo('.'+classes.like, { rotation: 360},{rotation:0, duration: 1 });
    
  }
  const classes={
    like:"like"+props.item.id,
    buy:"buy"+props.item.id
  }
  return (
    <div className="item d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.item.thumbnail} />
        <Card.Body>
        <Card.Text>{props.item.category}
          </Card.Text>

          <Card.Title>{props.item.title}</Card.Title>
          <Card.Title>price {props.item.price}$</Card.Title>
          <Card.Text>{props.item.description}
          </Card.Text>
       
          <Button onClick={()=>{
                  
                  buyAnimate()
          }}      variant="primary" 
                  className={classes.buy}
               >BUY!</Button>
          <div    
                  className={classes.like} 
                  onClick={()=>{setLike(!like);likeAnimate()}}
                  style={{display:props.display.prod}}>
            { like&&<FcLike/>||<FcLikePlaceholder />}
          </div>
        </Card.Body>
      </Card>
  
      
    </div>
  );
}

export default Cart;