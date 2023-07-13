import React from "react";
import { Link, useSearchParams } from "react-router-dom";

// Products({items})로 한 이유는 App.js(부모)에서 props로 넘겨준 걸 Products(자식)으로 받아오기 위함
export default function Products({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <button
            onClick={() => {
              setSearchParams({
                sort: "price",
              });
            }}
          >
            가격순정렬
          </button>

          {items.map((B) => {
            return (
              <Link to={`/products/${B.id}`}>
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  {B.name}
                  <br /> {B.price}
                </div>
              </Link>
              // 1. <Link to={`/products/${B.id}`}>로 쓴 이유는 items를 map으로 돌려 B로 받았고, link는 각각의 id에 맞게 들어가야 하기 때문에 B.id라고 씀.
              // 2. {B.name} <br /> {B.price} 부분은 name과 price만 필요하기 때문에 이렇게 적음.
            );
          })}
        </div>
      </div>
    </>
  );
}
