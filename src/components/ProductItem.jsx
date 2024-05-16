import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ product }) => {

  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { title, price, rating, stock, thumbnail, description, id } = product;

  const isInCart = cartItems && cartItems?.some((p) => p.id === id);

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <Box>
      <Card sx={{}}>
        <CardMedia sx={{ height: 140 }} image={thumbnail} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong> Price: {price}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong> Rating: {rating}</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            disabled={stock<=0?true:false}
            color={isInCart ? "error" : "primary"}
            onClick={handleClick}
          >
            {isInCart ? "Remove" : "Add"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default React.memo( ProductItem);
