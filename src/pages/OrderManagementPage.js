import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const OrderManagementPage = () => {
  const { orders } = useContext(OrderContext);
  const navigate = useNavigate(); 

  const handleViewOrder = (id) => {
    navigate(`/order-display/${id}`);  };

  return (
    <div>
      <h2>Order Management</h2>
      <List>
        {orders.map((order) => (
          <ListItem key={order.id}>
            <ListItemText primary={`Order #${order.id}: ${order.customerName}`} />
            <Button onClick={() => handleViewOrder(order.id)} variant="contained">View</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OrderManagementPage;
