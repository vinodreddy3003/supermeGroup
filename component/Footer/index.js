import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "./Link";

const index = () => {
  return (
    <Stack backgroundColor="#F9FBFF">
      <Stack sx={{ padding: "114px 466px" }} gap={10}>
        <Image
          src="/Header/Supreme_logos (3).svg"
          width={146}
          height={40}
          alt="Logo"
        />
        <Link />
        <Stack direction="row" justifyContent="space-between" alignItems="space-between">
          <Typography
            sx={{ fontSize: "14px", color: "#000000B2", fontWeight: 500 }}
          >
            ©2023. All Rights Reserved.
          </Typography>
          <Typography
            sx={{ fontSize: "14px", color: "#000000B2", fontWeight: 500 }}
          >
            Supreme house: 110, 16th Road,Chembur, Mumbai – 400071.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default index;
