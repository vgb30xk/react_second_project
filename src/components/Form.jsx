import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import uuid from "react-uuid";

const Form = () => {
  const id = uuid();

  // uuid를 통해서 아이디의 고유값 생성

  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // const todos = useSelector((state) => state.todos.todos);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    // 만약 제목이나 내용 둘중 하나라도 비어있다면 추가하지 못하게 하기
    dispatch(addTodo({ ...todo, id }));
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <Container onSubmit={onSubmitHandler}>
      <Wrapper>
        <Label>제목</Label>
        <Input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <Label>내용</Label>
        <Input
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </Wrapper>
      <Button>추가하기</Button>
    </Container>
  );
};

export default Form;

const Container = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const Input = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const Button = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
