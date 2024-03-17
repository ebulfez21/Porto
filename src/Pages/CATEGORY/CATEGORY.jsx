import "./style.css";

const Category = () => {
  return (
      <div className='container'>
          <h1 className="Shop">SHOP BY CATEGORY</h1>
      <div className=' Category'>
        
        <div className='CategoryContainer'>
          <div>
            <a href='#'>
              <img src='/img/category/category-1.jpg' alt='' />
              <h3>SUNGLASSES</h3>
              <p className="Praductsnumber">8 PRADUCTS</p>
            </a>
          </div>
          <div>
            <a href='#'>
              <img src='/img/category/category-2.jpg' alt='' />
              <h3>BAGS</h3>
              <p className="Praductsnumber">4 PRADUCTS</p>
            </a>{" "}
          </div>
          <div>
            <a href='#'>
              <img src='/img/category/category-3.jpg' alt='' />
              <h3>ELECTRONICS</h3>
              <p className="Praductsnumber">8 PRADUCTS</p>
            </a>
          </div>
          <div>
            <a href='#'>
              <img src='/img/category/category-4.jpg' alt='' />
              <h3>FASHION</h3>
              <p className="Praductsnumber">11 PRADUCTS</p>
            </a>
          </div>
          <div>
            <a href='#'>
              <img src='/img/category/category-5.jpg' alt='' />
              <h3>HEADPHONE</h3>
              <p className="Praductsnumber">3 PRADUCTS</p>
            </a>{" "}
          </div>
          <div>
            <a href='#'>
              <img src='/img/category/category-6.jpg' alt='' />
              <h3>SHOSE</h3>
              <p className="Praductsnumber">4 PRADUCTS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
