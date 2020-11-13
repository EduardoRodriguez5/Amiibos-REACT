import React from "react";
import { useForm } from "react-hook-form";
import "./ContactPage.scss"

export default function ContactPage() {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = data => {console.log(data);reset()};


  return (
    <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)} className="container_form">
            <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre"  ref={register ({ required: true})} />
                {errors.nombre && <span>Campo obligatorio y mínimo 8 caracteres</span>}
            <label htmlFor="email">Email</label>
                <input type="text"  name="email" ref={register({ required: true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/  })} />
                {errors.email && <span>Email incorrecto</span>}
            <label htmlFor="amiiboFavorito">Amiibo Favorito</label>
                <select name="amiiboFavorito" ref={register({ required: true })}>
                <option>Mario</option>
                <option>Luiggi</option>
                <option>El otro amigo de Mario</option>
                </select>
            <label htmlFor="text">Mensaje</label>
                <textarea cols="20" rows="10"  name="text" ref={register({ required: true  , minLength: 5 , maxLength:255})} />
                {errors.text && <span>El mensaje tiene que contener mínimo 5 caracteres y máximo 255</span>}
                <input type="submit" value="Enviar"/>
        </form>
    </div>
  );
}