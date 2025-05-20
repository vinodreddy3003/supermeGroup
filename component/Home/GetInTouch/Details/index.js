import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Stack gap={4}>
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: 500,
          fontFamily: "Manrope",
          color: "#FFFFFF",
        }}
      >
        {" "}
        Get In Touch
      </Typography>
      <Divider sx={{backgroundColor:"#FFFFFF",width: '20%' }} />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 400,
          fontFamily: "Manrope",
          color: "#FFFFFF",
        }}
      >
        For general enquiries
      </Typography>
      <Stack>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "Manrope",
            color: "#FFFFFF",
          }}
        >
          {" "}
          Address :
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            fontFamily: "Manrope",
            color: "#FFFFFF",
          }}
        >
          {" "}
          110, 16th Road, Chembur, Mumbai – 400071
        </Typography>
      </Stack>
      <Stack>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Manrope",
            color: "#FFFFFF",
          }}
        >
          Phone :
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            fontFamily: "Manrope",
            color: "#FFFFFF",
          }}
        >
          {" "}
          +91 22 25208822
        </Typography>
      </Stack>
      <Stack>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "Manrope",
            color: "#FFFFFF",
          }}
        >
          {" "}
          Email :
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: "Manrope",
            color: "#FFFFFF",
          }}
        >
          {" "}
          info@supremegroup.co.in
        </Typography>
      </Stack>
    </Stack>
  );
};

export default index;
