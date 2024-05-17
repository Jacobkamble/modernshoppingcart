import * as React from "react";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";

const ProductList = ({ data }) => {
  return (
    <Grid container justifyContent={"space-evenly"} gap={2}>
      {data &&
        data.map((product) => {
          return (
            <Grid item sm={3} >
              {" "}
              <ProductItem key={product.id} product={product} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default React.memo(ProductList);
