import img from '../image/logo.jpg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
const FloatingButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: 16,
  right: 16,
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: '#BA3F1D',
  color: '#ffffff',
  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)',
  '&:hover': {
    backgroundColor: '#A03F1D',
  },
}));

function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/order');
  };

  return (
    <>
      <div className="image-container">
        <img src={img} alt="logo" className="image" />
        <FloatingButton variant="contained" onClick={handleClick}>
        <AddCircleOutlineIcon />
      </FloatingButton>

      </div>


    </>
  );
}


export default HomePage;
