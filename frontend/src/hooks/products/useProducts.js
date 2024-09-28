import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productsApi";

const useProducts = (currentPage) => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products",currentPage],
    queryFn: ()=>getProducts(currentPage),
  });

  return { products, isLoading, isError, error };
};

export default useProducts;
