import {
  Box,
  Grid,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Form from "./form";
import Persentage from "./persentage";

const Main = () => {
  const [percentage, setPercentage] = useState();
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            maxWidth: { xs: "75%", md: "35%", lg: "35%" },
            borderRadius: " 0px 20px 20px 0px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
          container
        >
          {show && (
            <Grid
              item
              sx={{ bgcolor: "#6340FC", borderRadius: "20px" }}
              xs={12}
              md={6}
              lg={6}
            >
              <Persentage percentage={percentage} />
            </Grid>
          )}
          <Grid
            item
            sx={{
              borderRadius: " 0px 50px 50px 0px",
              // width:{{show === "true " ? }},
              p: 1,
            }}
            xs={12}
            md={6}
            lg={6}
            
          >
            <Form setPercentage={setPercentage} setShow={setShow} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
