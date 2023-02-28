import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright({title}) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5, mb: 4 }}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          {title}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }