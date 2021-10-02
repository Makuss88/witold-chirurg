import * as yup from 'yup';

export const checkForm = yup.object().shape({
  firstName: yup.string().min(2).max(20).required(),
  email: yup.string().email().required(),
  topic: yup.string().required(),
  text: yup.string().required(),
})

