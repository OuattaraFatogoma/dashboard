import ProgressCircle from "./ProgressCircle";
import { Box, Typography, useTheme } from '@mui/material';
import { token } from "../theme";

function StatBox({icon, title, number, progress, increase}) {
    const theme = useTheme();
    const colors = token(theme.palette.mode)
  return (
    <Box backgroundColor={colors.primary[400]} padding='1rem'>
        <Box display="flex" justifyContent="space-between">
            <Box>
                {icon}
                <Typography
                  sx={{color: colors.grey[300]}}
                >
                    {number}
                </Typography>
            </Box>
            <ProgressCircle progress={progress}/>
        </Box>
        <Box display="flex" justifyContent="space-between" color={colors.greenAccent[600]}>
                <Typography >{title}</Typography>
                <Typography sx={{fontStyle: "italic"}}>{increase}</Typography>
        </Box>
    </Box>
  )
}

export default StatBox