import  * as Yup from 'yup';

export const validationSchemaRegistration = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .matches(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
            "at least 8 Characters including a Number and a Special Character"
        )
        .required('Password is required')
})


