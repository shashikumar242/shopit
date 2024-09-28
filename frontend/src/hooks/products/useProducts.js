import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/productsApi";

const useProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products, isLoading, isError, error };
};

export default useProducts;
