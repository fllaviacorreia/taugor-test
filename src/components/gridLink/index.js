import { Grid, Link } from "@mui/material";

export default function GridLink({link, title}) {
  return (
    <Grid item>
      <Link href={link}variant="body2">
        {title}
      </Link>
    </Grid>
  )
}