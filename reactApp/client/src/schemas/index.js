import * as Yup from 'yup';

export 
const signUPSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.number().min(8).integer().required("Please enter your phone number"),
    password: Yup.string().min(6).required("Please enter password"),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be match"),
})

export
const vehicleSchema = Yup.object({
    vehicleNumber: Yup.string().required('Please enter vehicle number'),
    model: Yup.string().required('Enter model'),
   
})

export 
const driverSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.number().min(8).integer().required("Please enter your phone number"),
    cars: Yup.string().required('Please select the vehicle number'),
    password: Yup.string().min(6).required("Please enter password"),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be match"),
})

