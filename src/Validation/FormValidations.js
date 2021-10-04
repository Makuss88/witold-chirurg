import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup.string().required("Brak imienia!").min(2, "Mało liter").max(6, "Dużo liter"),
  email: yup.string().email("Zły e-mail!").required("Brak e-maila!"),
  topic: yup.string().required("Brak tematu!"),
  text: yup.string().required("Brak treści!"),
}).required();