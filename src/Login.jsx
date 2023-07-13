import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
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
      <h3>로그인 페이지입니다!</h3>
    </>
  );
}
