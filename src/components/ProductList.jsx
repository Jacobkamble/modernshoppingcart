import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductItem from "./ProductItem";
import { Box, Grid } from "@mui/material";

const ProductList = ({ data }) => {
  return (
 
           <Grid container gap={2}>
      {data &&
        data.map((product) => {
          return (
         
              <Grid item sm={3}>
                {" "}
                <ProductItem key={product.id} product={product} />
              </Grid>
          
          );
        })}
          </Grid>
  
  );
};

export default React.memo(ProductList) ;
