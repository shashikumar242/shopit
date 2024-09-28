


import React, { useState, Fragment, useEffect } from "react";
import Pagination from "rc-pagination";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { toast } from "react-toastify";
import { useParams ,useLocation} from "react-router-dom";
import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import useProducts from "../hooks/products/useProducts";

const Home = () => {
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);



  const categories = [
    "Electronics",
    "Cameras",
    "Laptops",
    "Accessories",
    "Headphones",
    "Food",
    "Books",
    "Clothes/Shoes",
    "Beauty/Health",
    "Sports",
    "Outdoor",
    "Home",
  ]

  const { products, isLoading, isError, error } = useProducts(keyword, currentPage, price, category,rating);
  

  useEffect(() => {
    setCategory('');
    setCurrentPage(1); 
    setRating(0);
  }, [keyword]);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    toast.error(error.response.data.message);
  }

  return (
    <Fragment>
      <MetaData title={"Buy Best Products Online - yaaar"} />
      <h1 id="products_heading">Latest Products</h1>
      <section id="products" className="container mt-5">
      <div className="row">
          
          {keyword ? (
            <Fragment>
              
              <div className="col-6 col-md-3 mt-5 mb-5">

                <div className="px-5">
                  
                  <Slider
                    
                    range
                    
                    marks={{
                    1: `$1`,
                    1000: `$1000`
                  }}
                    
                    min={1}
                    max={1000}
                    defaultValue={[1, 1000]}
                    tipFormatter={value => `$${value}`}
                    tipProps={{
                      placement: "top",
                      visible: true,
                    }}
                    value={price}
                    onChange={price => setPrice(price)}
                  />
                  
                  <div className="my-5" style={{height:"0.1px",width:"100%",background:"#c1c1c1"}}></div>
                  
                  <div className="mt-5">
                    
                    <h4 className="mb-3">

                      Categories
                    </h4>


                    <ul className="pl-0">

                      {categories.map(category => (
                        <li style={{ cursor: 'pointer', listStyleType: 'none' }} key={category} onClick={() => setCategory(category)}>
                          
                          {category}
                          </li>
                        ))}
                    </ul>


                  </div>

                  <div className="my-3" style={{height:"0.1px",width:"100%",background:"#c1c1c1"}}></div>
                  
                  <div className="mt-5">
                    
                    <h4 className="mb-3">

                      Ratings
                    </h4>


                    <ul className="pl-0">

                    {[5, 4, 3, 2, 1].map(star => (
    <li style={{ cursor: 'pointer', listStyleType: 'none' }} key={star} onClick={() => setRating(star)}>
      <div className="rating-outer">
        {Array.from({ length: 5 }, (_, index) => (
          <span  key={index} className={index < star ? 'fa fa-star' : 'fa fa-star-o'}></span>
        ))}
      </div>
    </li>
  ))}
                    </ul>


                  </div>
                  
                 </div>
              </div>

              <div className="col-6 col-md-9">

                <div className="row">
                  {
                
                    products &&
                    products.products.map((product) => (
                      <Product key={product._id} product={product} col={4} />
                    ))
                  }
                 </div>
              </div>
          </Fragment>

          ): (
            products &&
            products.products.map((product) => (
              <Product key={product._id} product={product} col={3} />
            ))

          )}
          


         
        </div>
      </section>

      {products?.resPerPage <= products?.productsCount && (
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            current={currentPage}
            pageSize={products?.resPerPage}
            total={products?.productsCount}
            onChange={setCurrentPageNo}
            prevIcon={"Prev"}
            nextIcon={"Next"}
            className="page-link"
            showTotal={(total, range) =>
              `Showing ${range[0]}-${range[1]} of ${total}`
            }
          />
        </div>
      )}
    </Fragment>
  );
};

export default Home;
