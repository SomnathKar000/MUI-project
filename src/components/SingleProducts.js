import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";

const SingleProducts = (props) => {
  const product = props.product;

  return (
    <div>
      <Card sx={{ display: "flex" }}>
        <CardMedia component="div">
          <img src={product.img} alt="" width="150rem" />
        </CardMedia>
        <CardContent>
          <Tooltip title="Remove another one">
            <IconButton
              onClick={() => {
                console.log(product);
              }}
            >
              <RemoveIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
          <Typography variant="h3">{product.amount}</Typography>
          <Tooltip title="Add another one">
            <IconButton
              onClick={() => {
                console.log(product);
              }}
            >
              <AddIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleProducts;
