import React from "react";
import { Link } from "react-router-dom";

// Main({items})로 한 이유는 App.js(부모)에서 props로 넘겨준 걸 main(자식)으로 받아오기 위함
export default function Main({ items }) {
  return (
    <>
      <main>
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>

        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 여름 추천템 🔥</h2>
          <Link to="/products">더보기</Link>
          {/* 더보기에 products링크를 줘서클릭시 이동하게 함 */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {items.map((A) => {
              return (
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                >
                  {A.name}
                  <br />
                  {A.price}
                </div>
                // map함수를 이용하여 props로 통해 받아온 items중 name과 price만 나오게끔 한다.
              );
            })}
          </div>
        </section>

        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
