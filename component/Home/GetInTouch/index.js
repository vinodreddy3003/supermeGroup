import { Stack } from "@mui/material";
import React from "react";
import Form from "./Form";
import Details from "./Details";

const index = () => {
  return (
    <Stack sx={{ backgroundColor: "#0067B1" }}>
      <Stack
        direction="row"
        gap={20}
        sx={{ padding: "206px 240px" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Details />
        <Form />
      </Stack>
    </Stack>
  );
};

export default index;
