import React, { Fragment } from "react";
import { toast } from "react-toastify";
import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";
import useProducts from "../hooks/products/useProducts";

const Home = () => {
  const { products, isLoading, isError, error } = useProducts();


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
    </Fragment>
  );
};

export default Home;
