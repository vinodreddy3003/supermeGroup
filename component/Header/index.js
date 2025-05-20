import { Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Linkedin } from "mdi-material-ui";

const Index = () => {
  return (
    <Stack sx={{ backgroundColor: "#F9FBFF" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "20px 0px",maxWidth:"1302px",width:"98%",margin:"0 auto" }}
      >
        <Image
          src="/Header/Supreme_logos (3).svg"
          width={146}
          height={40}
          alt="Logo"
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button
            variant="contained"
            sx={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: 500,
              borderRadius: "100px",
              backgroundColor: "#5CD6FF",
              padding: "10px 30px",
            }}
          >
            Contact Us
          </Button>
          <IconButton onClick={() => window.open("https://www.linkedin.com/company/supreme-analytics/")}>
            <Linkedin />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Index;
