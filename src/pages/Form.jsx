import { Formik } from "formik"
import  * as yup  from "yup";
import { Box, TextField, Button, useMediaQuery } from "@mui/material";
import { Header } from "../components";

const initialValues = {
  firstName : "",
  lastName : "",
  email : "",
  contact : "",
  address1 : "",
  address2 : "",
}

const phoneRegex =  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  firstName : yup.string().required("required"),
  lastName : yup.string().required("required"),
  email : yup.string().email("Enter a valid email").required("required"),
  contact : yup.string().matches(phoneRegex,"Enter a valid phone number").required("required"),
  address1 : yup.string().required("required"),
  address2 : yup.string().required("required"),
})

function Form() {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  function handleFormSubmit(values){
    console.log(values);
  }
  return (
    <Box>
      <Header title="CREATE USER" subtitle="create a new user profile"/>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={userSchema}
      >
        {({values, touched, errors, handleBlur, handleChange, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <Box
              display= "grid"
              gap= '25px'
              gridTemplateColumns= "repeat(4, minmax(300, 1fr))"
              m="2rem 0" 
              sx={{
                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"},
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Button type="submit" variant="contained" color='secondary'>CREATE NEW USER</Button>
          </form>
        )}
        
      </Formik>
    </Box>
  )
}

export default Form