import React, { useState,memo } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import {
  sort,
  rating,
  outOfStock,
  search,
  clearFilter,
} from "../redux/features/filterSlice";
import { useDispatch } from "react-redux";
const Filter = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);
  const [outOfStockCheck, setOutOfStockCheck] = useState(false);
 

  const dispatch = useDispatch();

  const handleSort = (checkbox) => (e) => {
    setSelectedCheckbox(e.target.checked ? checkbox : null);
    dispatch(sort(checkbox));
  };

  const handleStock = (e) => {
    setOutOfStockCheck(e.target.checked);
    dispatch(outOfStock(true));
  };

  const handleRatingChange = (e) => {
    dispatch(rating(e.target.value));
  };

  return (
    <>
      <Box sx={{ p: 2, bgcolor: "background.paper", boxShadow: 1 }}>
        {/* <FormControl fullWidth sx={{ mb: 2 }}> */}
        {/* <InputLabel id="category-label">Category</InputLabel> */}
        {/* <Select
          labelId="category-label"
          id="category-select"
          value={selectedCategory}
          label="Category"
          onChange={handleCategoryChange}
        > */}
        {/* <MenuItem value="">All</MenuItem> */}
        {/* {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))} */}
        {/* </Select> */}
        {/* </FormControl> */}

        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCheckbox === "lowToHigh" ? true : false}
                onChange={handleSort("lowToHigh")}
                name="sort"
                color="primary"
              />
            }
            label="Low to High"
          />
        </FormGroup>

        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCheckbox === "highToLow" ? true : false}
                onChange={handleSort("highToLow")}
                name="sort"
                color="primary"
              />
            }
            label="High to Low"
          />
        </FormGroup>

        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={outOfStockCheck}
                onChange={handleStock}
                name="outOfStock"
                color="primary"
              />
            }
            label="Include Out of Stock"
          />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel id="rating-label">Minimum Rating</InputLabel>
          <Slider
            valueLabelDisplay="auto"
            aria-label="rating-slider"
            onChange={handleRatingChange}
            min={0}
            max={5}
            step={0.5}
            defaultValue={0}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default memo( Filter);
