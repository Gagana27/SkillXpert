import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RazorPay from './RazorPay';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner'; 
import { useParams, useLocation } from 'react-router-dom';
import DeleteButton from './Trash';
import { useAuthContext } from '../../hooks/UserAuthContext';
import { CartContextHook } from '../../hooks/CartContextHook';

function MyCart() {
  const [cart, setCart] = useState([]);
  const { categoryId, subcategoryId } = useParams();
  const { user } = useAuthContext();
  const { dispatch, cartItems } = CartContextHook();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const Data = location.state;

  useEffect(() => {
    if (user) {
      async function fetchSubcategories() {
        try {
          const response = await axios.get(`http://localhost:5000/cart/${user?.loginUser._id}`);
          setCart(response.data);
          dispatch({ type: 'GET_ALL_CARTS', payload: response.data });
          setIsLoading(false); 
        } catch (error) {
          console.error(error);
          setIsLoading(false); 
        }
      }

      setTimeout(fetchSubcategories, 1000); 
    }
  }, [categoryId, subcategoryId, user]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center loader">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div style={{ marginTop: '20px', marginLeft: '14px', marginRight: '10px' }}>
          <Row xs={1} md={3} className="g-4">
            {cartItems?.map((cart) => (
              <Col key={cart._id} xs={12} md={6} lg={4} className="mb-4">
                <Card
                  className="bg-secondary border-primary border-4"
                  border="blue"
                  style={{ minWidth: '18rem', maxWidth: '24rem', position: 'relative' }}
                >
                  <Card.Img
                    variant="top"
                    style={{ height: '135px', width: '100%', objectFit: 'cover' }}
                    src={cart?.image}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '5px',
                      right: '5px',
                      zIndex: '1',
                    }}
                  >
                    <DeleteButton cartId={cart._id} userId={user?.loginUser._id} />
                  </div>
                  <Card.Body>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <Card.Text className="text-white">{cart.courseName}</Card.Text>
                      </div>
                      <div>
                        <Card.Text className="text-white">Rs. {cart.price}</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
}

export default MyCart;
