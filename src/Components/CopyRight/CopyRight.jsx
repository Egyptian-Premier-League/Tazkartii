import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const CopyRight = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/Egyptian-Premier-League/Front-End"
      >
        Egyptian-Premier-League
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyRight;
