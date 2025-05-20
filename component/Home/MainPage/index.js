import { Stack, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Stack sx={{ backgroundColor: "#00000099" }}>
      <Stack
        sx={{ padding: "304px 520px 392px 520px",alignItems: "center" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            fontFamily: "Manrope",
            color: "#FFFFFF",
            marginBottom: "30px",
          }}
        >
          Performance in motion
        </Typography>
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 600,
            fontFamily: "Manrope",
            color: "#FFFFFF",
            alignItems: "center",
          }}
        >
          Soft Trims and NVH Solutions
        </Typography>
         <Typography
          sx={{
            fontSize: "34px",
            fontWeight: 400,
            fontFamily: "Manrope",
            color: "#FFFFFF",
            alignItems: "center",
          }}
        >
          for seamless rides
        </Typography>
      </Stack>
    </Stack>
  );
};

export default index;
