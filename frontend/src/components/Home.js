import React, { useState, Fragment, useEffect } from "react";
import Pagination from "rc-pagination";
import { toast } from "react-toastify";
import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import useProducts from "../hooks/products/useProducts";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { products, isLoading, isError, error } = useProducts(currentPage);

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
          {products &&
            products.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
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
