import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("firstName", { required: true })}
          type="text"
          placeholder="First name"
        />
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          type="text"
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: "비밀번호는 최소 5자리 이상이어야 합니다",
            minLength: 5,
          })}
          type="password"
          placeholder="Password"
        />
        <input
          {...register("repeatPassword", {
            required: "비밀번호는 최소 5자리 이상이어야 합니다",
            minLength: {
              value: 5,
              message: "비밀번호는 최소 5자리 이상이어야 합니다",
            },
          })}
          type="password"
          placeholder="Repeat Password"
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
