import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();

  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("email")} type="email" placeholder="Email" />
        <input
          {...register("firstName")}
          type="text"
          placeholder="First name"
        />
        <input {...register("lastName")} type="text" placeholder="Last name" />
        <input {...register("username")} type="text" placeholder="Username" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <input
          {...register("repeatPassword")}
          type="password"
          placeholder="Repeat Password"
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
