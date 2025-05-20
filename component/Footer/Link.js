import { Stack, Typography } from "@mui/material";
import React from "react";

const sectionTitleStyle = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#000000",
};

const itemStyle = {
  fontSize: "12px",
  color: "#000000B2",
  fontWeight: 500,
};

const Links = () => {
  return (
    <Stack direction="row" gap={15} >
      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>APPLICATION</Typography>
        <Stack gap={1.5}>
          <Typography sx={itemStyle}>Apparel</Typography>
          <Typography sx={itemStyle}>Automotive</Typography>
          <Typography sx={itemStyle}>Filtration</Typography>
        </Stack>
      </Stack>

      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>COMPANY</Typography>
        <Stack gap={1.5}>
          <Typography sx={itemStyle}>Innovation</Typography>
          <Typography sx={itemStyle}>About Us</Typography>
          <Typography sx={itemStyle}>Contact Us</Typography>
        </Stack>
      </Stack>

      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>MORE</Typography>
        <Stack gap={1.5}>
          <Typography sx={itemStyle}>Careers</Typography>
          
        </Stack>
      </Stack>

      <Stack gap={2.5}>
        <Typography sx={sectionTitleStyle}>FOLLOWUS</Typography>
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
