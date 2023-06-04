import * as Yup from 'yup';

export 
const signUPSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    phone: Yup.number().min(8).integer().required("Phone number is required!"),
    password: Yup.string().min(6).required("Password is required!"),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be match"),
})

export 
const signInSchema =Yup.object({
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string().min(6).required("Password is required!"),
})

export
const vehicleSchema = Yup.object({
    vehicleNumber: Yup.string().required('Vehicle number is required!'),
    model: Yup.string().required('Model is required!'),
   
})

export 
const driverSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    phone: Yup.number().min(8).integer().required("Phone Number is required!"),
    cars: Yup.string().required('Selection is required!'),
    password: Yup.string().min(6).required("Password is required!"),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be match"),
})

