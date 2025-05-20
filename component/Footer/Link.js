import { Stack, Typography } from "@mui/material";
import React from "react";

const sectionTitleStyle = {
  fontSize: "16px",
  fontWeight: 700,
  color: "#000000",
};

const itemStyle = {
  fontSize: "14px",
  color: "#000000B2",
  fontWeight: 500,
};

const Links = () => {
  return (
    <Stack direction="row" gap={10} >
      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>APPLICATION</Typography>
        <Stack gap={1.5}>
          <Typography sx={itemStyle}>Apparel</Typography>
          <Typography sx={itemStyle}>Automotive</Typography>
          <Typography sx={itemStyle}>Filtration</Typography>
          <Typography sx={itemStyle}>Customised Solutions</Typography>
        </Stack>
      </Stack>

      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>COMPANY</Typography>
        <Stack gap={1.5}>
          <Typography sx={itemStyle}>Innovation</Typography>
          <Typography sx={itemStyle}>Global Competency</Typography>
          <Typography sx={itemStyle}>About Us</Typography>
          <Typography sx={itemStyle}>Contact Us</Typography>
        </Stack>
      </Stack>

      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>MORE</Typography>
        <Stack gap={1.5}>
          <Typography sx={itemStyle}>Careers</Typography>
          <Typography sx={itemStyle}>Privacy Policy</Typography>
          <Typography sx={itemStyle}>Terms and Conditions</Typography>
        </Stack>
      </Stack>

      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>FOLLOW US</Typography>
        <Stack gap={1.5}>
          <Typography sx={itemStyle}>Twitter</Typography>
          <Typography sx={itemStyle}>LinkedIn</Typography>
          <Typography sx={itemStyle}>Instagram</Typography>
          <Typography sx={itemStyle}>Medium</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Links;
