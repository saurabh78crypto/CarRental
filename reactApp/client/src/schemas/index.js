import * as Yup from 'yup';

export const signUPSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    phone: Yup.number().min(8).integer().required("Please enter your phone number"),
    password: Yup.string().min(6).required("Please enter password"),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must be match"),
})