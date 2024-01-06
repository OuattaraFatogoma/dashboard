import { Box, Typography } from '@mui/material'
import { token } from '../theme';
import { useTheme } from '@emotion/react';

function Header({ title, subtitle}) {
    const theme = useTheme();
    const colors = token(theme.palette.mode)
  return (
    <Box>
        <Typography variant='h4'>{title}</Typography>
        <Typography variant='subtitle2' sx={{color: colors.greenAccent[400]}}>{subtitle}</Typography>
    </Box>
  )
}

export default Header