import React, { memo } from "react";
import { useFetchData } from "../hooks/useFetchData";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import Error from "../components/Error";
import { Grid, Typography } from "@mui/material";
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
        <Grid marginTop={1} container>
          <Grid item sm={3}>
            <Filter />
          </Grid>
          <Grid item sm={9}>
            {" "}
            <ProductList data={filterProducts} />
            {filterProducts.length===0&&(<Typography sx={{position:"absolute",left:"50%",top:"50%"}} variant="h4">No products found...</Typography>)}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default memo(ProductListContainer) ;
