import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "90px",
          boxSizing: "border-box",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px",
            backgroundColor: "#000000",
            color: "white",
          }}
        >
          <Link to="/">로고</Link>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <div
              onClick={() => {
                alert("로그인페이지로 이동");
                navigate("/login");
              }}
            >
              로그인
            </div>
            <div
              onClick={() => {
                alert("회원가입페이지로 이동");
                navigate("/signup");
              }}
            >
              회원가입
            </div>
          </div>
        </header>
        <Outlet />
        {/* header와 footer는 페이지들의 고정되는 부분이기 때문에 내용이 바뀌는 가운데 부분을 outlet으로 지정하였다 */}
        <footer
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            padding: "24px",
            backgroundColor: "#EEEEEE",
            color: "black",
            position: "absolute",
            bottom: 0,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div>문의하기</div>
          <div>SNS 채널들</div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
