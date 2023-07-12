import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Persentage = ({ percentage }) => {
  return (
    <Box>
      <Box sx={{ textAlign: "center", p: 2 }}>
        <Typography sx={{ fontSize: "20px", color: "#c6c7fe" }}>
          Your Result
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "#4a24ce",
            backgroundImage: "linear-gradient(#4c22ca,#5443ef)",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "20px",
          }}
        >
          <Typography
            component="h6"
            sx={{ fontSize: "55px", color: "white", fontWeight: "bold" }}
          >
            {percentage}
          </Typography>
          <Typography
            component="h6"
            sx={{ fontSize: "15px", color: "#8a7dff" }}
          >
            of 100
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <Typography
          component="h4"
          sx={{ fontSize: "25px", color: "white", fontWeight: "bold" }}
        >
          Great
        </Typography>
        <Typography component="p" sx={{ textAlign: "center", color: "white" }}>
          Your scored higher than 65% of the people who havetaken these tests
        </Typography>
      </Box>
    </Box>
  );
};

export default Persentage;
