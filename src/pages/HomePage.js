import img from '../image/logo.jpg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/order');
  };

  return (
    <>
      <div className="image-container">
        <img src={img} alt="logo" className="image" />

        <Button className="floating-button" onClick={handleClick}>
          <AddCircleOutlineIcon />
        </Button>

      </div>


    </>
  );
}


export default HomePage;
