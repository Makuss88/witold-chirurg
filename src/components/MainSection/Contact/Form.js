import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { BiError } from 'react-icons/bi';
import { Styles, FlexRow, FlexColumn } from "./FormStyled";
import { schema } from '../../../Validation/FormValidations';

const Form = () => {

  const [formValidation, setFormValidation] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log({ data });
    reset();
    setFormValidation(true)
  };

  return (
    <Styles>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formValidation ? <h1>E-MAIL WYSŁANY!</h1> : <h1>Zostaw wiadomość</h1>}
        <FlexRow>
          <FlexColumn>
            <label>Imię</label>
            <input {...register("firstName")}
              placeholder="Imię" />
            {errors.firstName && <p><BiError size={24} />{errors.firstName.message}</p>}
          </FlexColumn>
          <FlexColumn>
            <label>E-mail</label>
            <input {...register("email")}
              placeholder="Adres e-mail"
            />
            {errors.email && <p><BiError size={24} />{errors.email.message}</p>}
          </FlexColumn>
        </FlexRow>
        <label>Temat</label>
        <input {...register("topic", {
          required: "Brak imienia!"
        })}
          placeholder="Temat" />
        {errors.topic && <p><BiError size={24} />{errors.topic.message}</p>}
        <label>Treść wiadomości</label>
        <input {...register("text", {
          required: "Brak treści!"
        })}
          placeholder="Treść wiadomości" />
        {errors.text && <p><BiError size={24} />{errors.text.message}</p>}
        <input type="submit" className="submitButton" />
      </form>
    </Styles>
  );
}

export default Form;