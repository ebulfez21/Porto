import Category from "../CATEGORY/CATEGORY";
import Popular from "../POPULAR/POPULAR";
import "./style.css";
const Home = () => {
  return (
    <div className='Home'>
      <Category />
      <Popular />
    </div>
  );
};

export default Home;
