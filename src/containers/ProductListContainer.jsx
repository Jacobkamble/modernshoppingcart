import React, { memo } from "react";
import { useFetchData } from "../hooks/useFetchData";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import Error from "../components/Error";
import { Grid } from "@mui/material";
import Filter from "../components/Filter";
import { useFilterData } from "../hooks/useFilterData";

const URL = `https://dummyjson.com/products`;

const ProductListContainer = () => {
  const { data, loading, error } = useFetchData(URL);

  const filterProducts = useFilterData(data);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}

      {!loading && !error && (
        <Grid container>
          <Grid item sm={3}>
            <Filter />
          </Grid>
          <Grid item sm={9}>
            {" "}
            <ProductList data={filterProducts} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default memo(ProductListContainer) ;
