import img from '../image/logo.jpg'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/my order');
  };
  return (
    <>
      <div>
        <h1>hi</h1>
      </div>
      <img src={img} alt="logo" className="d-block w-100" />
      <Button onClick={handleClick}>
        <AddCircleOutlineIcon />
      </Button>
    </>
  );
}


export default HomePage;
