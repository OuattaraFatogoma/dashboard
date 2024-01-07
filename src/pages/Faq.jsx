import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, useTheme, } from '@mui/material'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Header } from '../components'
import { token } from '../theme';


function Faq() {
  const theme = useTheme()
  const colors = token(theme.palette.mode)
  return (
    <Box>
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />
      <Box m="2rem 0">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlinedIcon />}
            sx={{color: colors.blueAccent[300]}}
          >
            <Typography variant='h6'>An Important Question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography align='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlinedIcon />}
            sx={{color: colors.blueAccent[300]}}
          >
            <Typography variant='h6'>Another Important Question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography align='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlinedIcon />}
            sx={{color: colors.blueAccent[300]}}
          >
            <Typography variant='h6'>Your Favorite Question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography align='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlinedIcon />}
            sx={{color: colors.blueAccent[300]}}
          >
            <Typography variant='h6'>Some Random Questio</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography align='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreOutlinedIcon />}
            sx={{color: colors.blueAccent[300]}}
          >
            <Typography variant='h6'>The Final Question</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography align='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>


      </Box>
    </Box>
  )
}

export default Faq