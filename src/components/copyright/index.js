import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import PropTypes from 'prop-types';

function Copyright({ link, title }) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={ { mt: 5, mb: 4 } }
    >
      {'Copyright © '}
      <Link color="inherit" href={ link }>
        {title}
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

Copyright.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Copyright;
