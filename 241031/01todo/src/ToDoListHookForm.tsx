import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
interface Form {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord1: string;
  passWord2: string;
  extraError?: string;
}

const ToDoListHookForm = () => {
  // const [todo, setTodo] = useState("");
  // const [toDoError, setToDoError] = useState("");

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // console.log(todo);
  //   if (todo.length < 10) {
  //     return setToDoError("10자 이상 입력 부탁요");
  //   }
  //   console.log(todo);
  // };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setToDoError("");
  //   setTodo(value);
  // };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<Form>({
    defaultValues: {
      email: "@gmail.com",
    },
  });
  // console.log(register("toDo"));
  // console.log(watch());

  const onValid = (data: Form) => {
    if (data.passWord1 !== data.passWord2) {
      setError(
        "passWord2",
        { message: "비밀번호가 일치하지 않습니다." },
        {
          shouldFocus: true,
        }
      );
    }
    // setError("extraError", { message: "로딩중..." });
    setValue("userName", "");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          // 유효성 검사 하는 법 required: true 필수값 설정
          {...register("email", {
            required: "Email is required", // 필수 필드 에러 메시지
            pattern: {
              // 정규표현식
              value: /^[A-Za-z0-9._%+-]+@gmail\.com$/, // 구글 이메일 형식만 허용
              message: "Only google.com emails allowed", // 형식 에러 메시지
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string} </span>
        <input
          {...register("firstName", {
            required: "이름을 입력해주세요",
            validate: (value) =>
              !value.includes("test") ? "No Test allowed" : true,
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("userName", { required: true, minLength: 2 })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.userName?.message as string}</span>
        <input
          // required자체는 true값이 나온다. required: "password is"
          {...register("passWord1", {
            required: "Password is required..",
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요",
            },
          })}
          type="text"
          placeholder="passWord1"
        />
        <span>{errors?.passWord1?.message as string}</span>
        <input
          {...register("passWord2", { required: true, minLength: 8 })}
          type="text"
          placeholder="Password2"
        />
        <span>{errors?.passWord2?.message as string}</span>
        <input type="submit" value={"add"} />
        <span>{errors?.extraError?.message as string}</span>
      </Form>
    </Container>
  );
};

export default ToDoListHookForm;
