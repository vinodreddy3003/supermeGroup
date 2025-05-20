import { Box, Button, TextField } from "@mui/material";

export default function ContactForm() {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        maxWidth: "500px",
        color: "#fff",
        gap: 2,
      }}
    >
      <form>
        {["Full name", "E-mail", "Subject", "Message"].map((label, index) => (
          <TextField
            key={label}
            label={label}
            variant="standard"
            fullWidth
            multiline={label === "Message"}
            rows={label === "Message" ? 4 : undefined}
            sx={{
              marginBottom:"40px",
              input: { color: "#fff" },
              textarea: { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },
              "& .MuiInput-underline:before": { borderBottomColor: "#fff" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "#fff",
              },
              "& .MuiInput-underline:after": { borderBottomColor: "#fff" },
            }}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "30px",
            px: 4,
            py: 1,
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          Send
        </Button>
      </form>
    </Box>
  );
}
