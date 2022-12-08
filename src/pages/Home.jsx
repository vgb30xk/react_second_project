import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

// 각 컴포넌트들의 요소들 불러와서 순서 배치하기

export default Home;
