import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FcLikePlaceholder} from "react-icons/fc";
import { FcLike} from "react-icons/fc";
import { useAppDispatch } from '../../hooks/redux';
import { basketSlice } from '../../store/reducers/BasketSlice';
function Cart(props:any) {
  const [like,setLike]=useState(false);
  const dispatch =useAppDispatch()
  const {addItem,delItem}= basketSlice.actions
  const num={
    number:1
  }
  
  return (
    <div className="item d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.item.thumbnail} />
        <Card.Body>
        <Card.Text>{props.item.category}
          </Card.Text>

          <Card.Title>{props.item.title}</Card.Title>
          
          <Card.Text>{props.item.description}
          </Card.Text>
          <Button onClick={()=>{
                  dispatch(addItem({...props.item,...num}))
          }} variant="primary">BUY!</Button>
          <div className='like' onClick={()=>setLike(!like)}>
          {like&&<FcLike/>||<FcLikePlaceholder />}
          </div>
        </Card.Body>
      </Card>
  
      
    </div>
  );
}

export default Cart;