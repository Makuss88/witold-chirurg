import React from "react";
import { Styles, FlexRow, FlexColumn } from "./FormStyled";
import { useForm } from "react-hook-form";


const Form = () => {

  const { register, formState: { errors }, handleSubmit } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Styles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Zostaw wiadomość</h1>
        <FlexRow>
          <FlexColumn>
            <label>Imię</label>
            <input {...register("firstName", { required: "Brak imienia!", })} placeholder="Imię" />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </FlexColumn>
          <FlexColumn>
            <label>E-mail</label>
            <input {...register("email", { required: "Brak e-maila!", pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} placeholder="Adres e-mail" />
            {errors.email && <p>{errors.email.message}</p>}
          </FlexColumn>
        </FlexRow>
        <label>Temat</label>
        <input {...register("topic", { required: "Brak imienia!" })} placeholder="Temat" />
        {errors.topic && <p>{errors.topic.message}</p>}
        <label>Treść wiadomości</label>
        <input {...register("text", { required: "Brak treści!" })} placeholder="Treść wiadomości" />
        {errors.text && <p>{errors.text.message}</p>}
        <input type="submit" className="submitButton" />
      </form>
    </Styles>
  );
}

export default Form;