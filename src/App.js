import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Products from "./Products";
import Product from "./Product";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [items] = useState([
    {
      id: 1,
      name: "멋진바지",
      price: 20000,
      option: [
        { key: 0, value: "선택하세요" },
        { key: 1, value: 28 },
        { key: 2, value: 30 },
        { key: 3, value: 32 },
      ],
      //option은 map을 돌리기 위해서 객체로 함.
      likes: "100개",
    },

    {
      id: 2,
      name: "멋진셔츠",
      price: 10000,
      option: [
        { key: 0, value: "선택하세요" },
        { key: 1, value: "S" },
        { key: 2, value: "M" },
        { key: 3, value: "L" },
      ],
      likes: "200개",
    },
    {
      id: 3,
      name: "멋진신발",
      price: 30000,
      option: [
        { key: 0, value: "선택하세요" },
        { key: 1, value: 230 },
        { key: 2, value: 240 },
        { key: 3, value: 250 },
        { key: 4, value: 260 },
        { key: 5, value: 270 },
      ],
      likes: "300개",
    },
  ]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main items={items} />} />
        {/* path는 경로,주소임 */}
        {/* {<Main items={items} />}로 쓴 이유는 items를 main으로 보내주기 위함이다. */}
        <Route path="/products" element={<Products items={items} />} />
        <Route path="/products/:id" element={<Product items={items} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      {/* //Router Layout부분 안에 자식요소들이 들어가 있는 이유는 자식요소 부분이 outlet에 해당되는 부분이기 때문이다 */}
    </Routes>
  );
}

export default App;
