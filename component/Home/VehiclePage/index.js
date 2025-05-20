import React, { useState } from "react";
import { Box, Typography, IconButton, Grid, Stack } from "@mui/material";
import Image from "next/image";

const images = {
  complete: "/Home/VehiclePage/Passenger Alpha 1 (1).png",
  front: "/Home/VehiclePage/Front.png",
  cabin: "/Home/VehiclePage/Cabin.png",
  trunk: "/Home/VehiclePage/Trunk.png",
  exterior: "/Home/VehiclePage/Exterior.png",
};

export default function VehiclePage() {
  const [currentImage, setCurrentImage] = useState(images.complete);

  return (
    <Box
      sx={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh", p: 4 }}
    >
      <Stack
        sx={{ padding: "72px 400px" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            fontSize: "48px",
            fontWeight: 300,
            alignItems: "center",
            fontFamily: "Manrope",
          }}
        >
          {" "}
          Evolving the drive with <strong>360-degree</strong> nonwoven solutions
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Stack sx={{ padding: "0px 200px" }}>
          <Typography
            sx={{ fontSize: "28px", fontWeight: 700, fontFamily: "Manrope" }}
          >
            Passenger vehicles{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 400, fontFamily: "Manrope" }}
          >
            Revving up Nonwoven innovation from interior to exterior.{" "}
          </Typography>
        </Stack>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={currentImage}
            alt="Vehicle Transparent"
            sx={{
              width: "100%",
              maxWidth: "800px",
              height: "540px",
              cursor: "pointer",
            }}
            onClick={() => setCurrentImage(images.complete)}
          />
        </Grid>
      </Stack>

      <Box
        mt={4}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
        gap={4}
        sx={{
          padding: "0px 200px",
          marginBottom: "64px",
        }}
      >
        <Box
          textAlign="center"
          onClick={() => setCurrentImage(images.complete)}
          sx={{ cursor: "pointer" }}
        >
          <Stack>
            <Image
              src="/Home/VehiclePage/Passenger Alpha 1 (1).png"
              width={70}
              height={70}
            />
            <Typography variant="caption">Complete Body</Typography>
          </Stack>
        </Box>
        <Box
          textAlign="center"
          onClick={() => setCurrentImage(images.front)}
          sx={{ cursor: "pointer" }}
        >
          <Stack>
            <Image
              src="/Home/VehiclePage/Front.png"
              width={70}
              height={70}
            />
            <Typography variant="caption">Front</Typography>
          </Stack>
        </Box>
        <Box
          textAlign="center"
          onClick={() => setCurrentImage(images.cabin)}
          sx={{ cursor: "pointer" }}
        >
          <Stack>
            <Image
              src="/Home/VehiclePage/Cabin.png"
              width={70}
              height={70}
            />
            <Typography variant="caption">Cabin</Typography>
          </Stack>
        </Box>
        <Box
          textAlign="center"
          onClick={() => setCurrentImage(images.trunk)}
          sx={{ cursor: "pointer" }}
        >
          <Stack>
            <Image
              src="/Home/VehiclePage/Trunk.png"
              width={70}
              height={70}
            />
            <Typography variant="caption">Trunk</Typography>
          </Stack>
        </Box>
        <Box
          textAlign="center"
          onClick={() => setCurrentImage(images.exterior)}
          sx={{ cursor: "pointer" }}
        >
          <Stack>
            <Image
              src="/Home/VehiclePage/Exterior.png"
              width={70}
              height={70}
            />
            <Typography variant="caption">Exterior</Typography>
          </Stack>
        </Box>

        <IconButton sx={{ color: "white" }}></IconButton>
      </Box>
    </Box>
  );
}
