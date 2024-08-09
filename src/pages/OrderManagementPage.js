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
        {orders.map((order, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Order #${index + 1}: ${order.customerName}`} />
            <Button onClick={() => handleViewOrder(index)} variant="contained">View</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default OrderManagementPage;
