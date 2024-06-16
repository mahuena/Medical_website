import * as Yup from 'yup';

export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .matches(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
            "Must Contain 8 Characters, One Number and One Special Case Character"
        )
        .required('Password is required')
});
