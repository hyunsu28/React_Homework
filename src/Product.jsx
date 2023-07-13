import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Product({items})로 한 이유는 App.js(부모)에서 props로 넘겨준 걸 Product(자식)으로 받아오기 위함
export default function Product({ items }) {
  const { id } = useParams();
  const [contents, setContents] = useState("");
  const onChange = (e) => {
    setContents(e.target.value);
  };
  //  const onChange부분은 내가 선택한 값으로 바껴서 보여야 하기 때문에 (e.target.value)를 줘야했다.
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {items.map((I) => {
            // map을 돌려서 가져온 id값과 URL에 요청된 id값이 같을 때 해당되는 정보만 불러올 수 있게끔 하기 위함.
            // id==id는 타입이 달라도 id가 일치하면 가져올 수 있음.
            if (I.id == id)
              return (
                <>
                  <div
                    style={{
                      width: "200px",
                      height: "240px",
                      backgroundColor: "#068FFF",
                    }}
                  >
                    {I.name}
                  </div>

                  <div>
                    <h3>가격:{I.price} </h3>
                    <h3>좋아요: {I.likes}</h3>
                    <h3>구매옵션</h3>
                    {/* App.js에서 선언한 items의 내용에 맞게 각 부분에 들어가게 하기 위하여 map을 돌린 뒤 {I.price}와 같은 형태로 해당 부분에 맞는 값이 들어가도록 하였다. */}
                    <select
                      style={{
                        width: "100px",
                      }}
                      onChange={onChange}
                      value={contents}
                    >
                      {I.option.map((O) => {
                        return (
                          <>
                            <option key={O.key} value={O.value}>
                              {O.value}
                            </option>
                          </>
                        );
                      })}
                    </select>
                    {contents !== "선택하세요" && <p>구매옵션:{contents}</p>}
                    {/* option의 경우 다시 한 번 map을 돌렸고, 선택하세요가 아닐 경우에만 옵션이 보일 수 있도록 연산자를 사용하였다 */}
                  </div>
                </>
              );
          })}
        </div>
      </div>
    </>
  );
}
