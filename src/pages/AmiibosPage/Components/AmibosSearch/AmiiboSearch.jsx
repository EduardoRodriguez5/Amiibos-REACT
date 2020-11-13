
import React, {useState} from "react";
import { useForm } from "react-hook-form";

export default function AmiiboSearch(props){

    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = data => {
        props.fnFilterName(data);
        
    };

    return (
            
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="name"></label>
                    <input type="text" name="name" id="name" ref={register}/>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </>
    )
}