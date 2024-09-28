import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productsApi";

const useProducts = (keyword,currentPage,price,category,rating) => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products",keyword,currentPage,price,category,rating],
    queryFn: ()=>getProducts(keyword,currentPage,price,category,rating),
  });

  return { products, isLoading, isError, error };
};

export default useProducts;
