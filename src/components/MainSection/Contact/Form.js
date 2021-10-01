import React, { useState } from "react";
import { Styles, FlexRow, FlexColumn } from "./FormStyled";
import { useForm } from "react-hook-form";
import { fromValidation } from '../../../Validation/FormValidations';

const Form = () => {

  const dupa = async (event) => {
    event.preventDefault();
    let form = {
      firstName: event.target[0].value,
      email: event.target[1].value,
      topic: event.target[2].value,
      text: event.target[3].value,
    }
    console.log(form);
    const isValid = await fromValidation.isValid(form)
    console.log(isValid)
  }

  const { register, reset, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });

  const [formValidation, setFormValidation] = useState(false);

  const onSubmit = (data) => {
    setFormValidation(true)
    console.log(data);
    reset();
  };

  return (
    <Styles>
      <form onSubmit={dupa}>
        {formValidation ? <h1>E-MAIL WYSŁANY!</h1> : <h1>Zostaw wiadomość</h1>}
        <FlexRow>
          <FlexColumn>
            <label>Imię</label>
            <input {...register("firstName", {
              required: "Brak imienia!",
            })}
              placeholder="Imię"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </FlexColumn>
          <FlexColumn>
            <label>E-mail</label>
            <input {...register("email", {
              required: "Brak e-maila!",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Zły e-mail"
              }
            })}
              placeholder="Adres e-mail"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </FlexColumn>
        </FlexRow>
        <label>Temat</label>
        <input {...register("topic", {
          required: "Brak imienia!"
        })}
          placeholder="Temat" />
        {errors.topic && <p>{errors.topic.message}</p>}
        <label>Treść wiadomości</label>
        <input {...register("text", {
          required: "Brak treści!"
        })}
          placeholder="Treść wiadomości" />
        {errors.text && <p>{errors.text.message}</p>}
        <input type="submit" className="submitButton" />
      </form>
    </Styles>
  );
}

export default Form;