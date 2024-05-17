import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  TextField,
  Avatar,
  Grid,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({cartItems,handleRemoveItem,handleQuantityChange,handleClearCart}) => {
 
  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
        }}
      >
        {cartItems.length===0&&<Typography variant="h5">Cart is empty,please add products...!!!</Typography>}
        <List>
          {cartItems &&
            cartItems.map(
              ({ title, price, thumbnail, id,quantity  }) => (
                <ListItem key={id}>
                  <Grid container alignItems="center">
                    <Grid item xs={2}>
                      <Avatar
                        alt={title}
                        src={thumbnail}
                        sx={{ width: 64, height: 64 }}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <ListItemText
                        primary={title}
                        secondary={
                          <Typography variant="body2" color="text.secondary">
                            Price: ${price.toFixed(2)}
                          </Typography>
                        }
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id={`quantity-${id}`}
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        size="small"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(id, parseInt(e.target.value))}
                        inputProps={{ min: 1 }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleRemoveItem(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </Grid>
                  </Grid>
                </ListItem>
              )
            )}
        </List>
        {cartItems.length>0&&(<><Button variant="contained" size="small" onClick={handleClearCart}>Clear Cart</Button>        <Typography sx={{}} variant="h5">Total : {cartItems&&cartItems.reduce((acc,curr)=>acc+(curr.price*curr.quantity),0)}</Typography></>) }
       

       
      </Box>
    </>
  );
};

export default Cart;
