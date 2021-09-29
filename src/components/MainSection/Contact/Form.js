import React from "react";
import { Styles, FlexRow, FlexColumn, Error } from "./FormStyled";
import { useForm } from "react-hook-form";


const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('Mamy Twoje informacje!')
    console.log(data);
  }
  return (
    <Styles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Zostaw wiadomość</h1>
        <FlexRow>
          <FlexColumn>
            <label >Imię</label>
            <input {...register("firstName", { required: true })} placeholder="Imię" />
            <Error errors={errors.firstName} />
            {errors.firstName && "Brak imienia"}
          </FlexColumn>
          <FlexColumn>
            <label>E-mail</label>
            <input {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} placeholder="Adres e-mail" />
            {errors.email && "Brak adresu e-mail!"}
          </FlexColumn>
        </FlexRow>
        <label>Temat</label>
        <input {...register("topic", { required: true })} placeholder="Temat" />
        {errors.topic && "Brak tematu!"}
        <label>Treść wiadomości</label>
        <input {...register("text", { required: true })} placeholder="Treść wiadomości" />
        {errors.text && "Brak treści wiadomiści!"}
        <input type="submit" className="submitButton" />
      </form>
    </Styles>
  );
}

export default Form;