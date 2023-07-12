import {
  Box,
  Button,
  createStyles,
  Grid,
  Input,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import {
  AcUnit,
  ElectricBolt,
  Start,
  Textsms,
  Visibility,
} from "@mui/icons-material";
import { Formik } from "formik";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  padding: "3px",
  margin: "23px 8px",
  color: theme.palette.text.secondary,
}));
const BorderLessInput = styled(Input)(({ theme }) => ({
  width: "20px",
  "&::before": { borderBottom: "none" },
  "&::after": { borderBottom: "none" },
}));
const useStyles = makeStyles({
  borderLess: {
    width: "20px",
    "&.MuiInput-input": {
      "&::before": { borderBottom: "none" },
      "&::after": { borderBottom: "none" },
    },
  },
});

const Form = ({ setPercentage, setShow }) => {
  const [total, setTotal] = useState(0);
  const style = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Formik
          initialValues={{
            reaction: "",
            memory: "",
            verbal: "",
            visual: "",
          }}
          onSubmit={(values) => {
            setShow(true);
            // console.log(
            setPercentage(
              Object.values(values).reduce(
                (partialSum, a) => parseFloat(partialSum) + parseFloat(a),
                0
              ) / 4
            );
            //   "5555555555555555"
            // setPer
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "20px", p: 1, color: "#4b5676" }}
                  >
                    Summary
                  </Typography>
                  <Item sx={{ bgcolor: "#fff7f5" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box
                        sx={{
                          widht: "100%",
                          display: "flex",
                          gap: "10px",
                          p: 0.5,
                        }}
                      >
                        <ElectricBolt sx={{ color: "#d14a47" }} mt={1} />
                        <Typography
                          sx={{ color: "#d14a47", fontSize: "16px" }}
                          variant="h6"
                        >
                          Reaction
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100px",
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Typography>
                          <BorderLessInput
                            type="text"
                            name="reaction"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.reaction}
                          />
                          /100
                        </Typography>
                      </Box>
                    </Box>
                  </Item>
                  <Item sx={{ bgcolor: "#fffbf2" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          widht: "100%",
                          display: "flex",
                          gap: "10px",
                          p: 0.5,
                        }}
                      >
                        <AcUnit sx={{ color: "#e7a732" }} mt={1} />
                        <Typography
                          sx={{ color: "#e7a732", fontSize: "16px" }}
                          variant="h6"
                        >
                          Memory
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100px",
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Typography>
                          {/* <Input
                      sx={{
                        width: "20px",
                        "&::before": { borderBottom: "none" },
                        "&::after": { borderBottom: "none" },
                      }}
                    /> */}
                          <BorderLessInput
                            type="text"
                            name="memory"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.memory}
                          />
                          /100
                        </Typography>
                      </Box>
                    </Box>
                  </Item>
                  <Item sx={{ bgcolor: "#f2fbfa" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box
                        sx={{
                          widht: "100%",
                          display: "flex",
                          gap: "10px",
                          p: 0.5,
                        }}
                      >
                        <Textsms sx={{ color: " #5abfa0" }} mt={1} />
                        <Typography
                          sx={{ color: " #5abfa0", fontSize: "16px" }}
                          variant="h6"
                        >
                          Verbal
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100px",
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Typography>
                          <BorderLessInput
                            type="text"
                            name="verbal"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.verbal}
                          />
                          /100
                        </Typography>
                      </Box>
                    </Box>
                  </Item>
                  <Item sx={{ bgcolor: "#f3f3fd" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box
                        sx={{
                          widht: "100%",
                          display: "flex",
                          gap: "10px",
                          p: 0.5,
                        }}
                      >
                        <Visibility sx={{ color: "#5961c0" }} mt={1} />
                        <Typography
                          sx={{ color: "#5961c0", fontSize: "16px" }}
                          variant="h6"
                        >
                          Visual
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          width: "100px",
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Typography>
                          <BorderLessInput
                            type="text"
                            name="visual"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.visual}
                          />
                          /100
                        </Typography>
                      </Box>
                    </Box>
                  </Item>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      sx={{
                        width: "100%",
                        minWidth: "80%",
                        borderRadius: "20px",
                        bgcolor: "#303b59",
                      }}
                      variant="contained"
                      type="submit"
                    >
                      Continue
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Form;
