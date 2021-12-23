import { SubmitHandler, useForm } from "react-hook-form";
import { DefaultValue } from "recoil";

interface Form {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  repeatPassword: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      email: "@naver.com",
      firstName: "name",
    },
  });
  const onValid: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com emails allowed",
            },
          })}
          type="email"
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "필수 값입니다" })}
          type="text"
          placeholder="First name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "필수 값입니다" })}
          type="text"
          placeholder="Last name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "필수 값입니다",
            minLength: 10,
          })}
          type="text"
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "비밀번호는 최소 5자리 이상이어야 합니다",
            minLength: 5,
          })}
          type="password"
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
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
        <span>{errors?.repeatPassword?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
