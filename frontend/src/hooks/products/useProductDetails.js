import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../../api/productsApi";

export const useProductDetails = (id) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });

  return { data, isLoading, isError, error };
};

export default useProductDetails;
