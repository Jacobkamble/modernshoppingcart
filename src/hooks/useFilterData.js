import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useFilterData = (data) => {


  const { sort,
     rating, outOfStock, searchQuery } = useSelector(
    (state) => state.filters
  );

  const originalData=[...data]
  const filterProducts = (rawData) => {
    let products = [...rawData];

    

    if (sort === "lowToHigh") {
      products = products.sort((a, b) => a.price - b.price);
    }
    if (sort === "highToLow") {
      products = products.sort((a, b) => b.price - a.price);
    }
    if (searchQuery) {
      products = products.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (rating) {
      products = products.filter((prod) => prod.rating >= rating);
    }
    if (outOfStock) {
      products = products.filter((prod) => prod.stock >= 0);
    }


    // console.log("product",products)

    return products;
  };

  const memoFilter = useMemo(() => {
    return filterProducts(data);
  }, [sort, rating, outOfStock, searchQuery,data]);

  return memoFilter;
};
