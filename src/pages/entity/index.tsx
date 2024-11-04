import { FC } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
export const Entity: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigateToPage1 = () => {
    return navigate("./page1", { relative: "route", replace: false });
  };
  const navigateToPageChild = (number: number) => {
    console.log(pathname);
    return navigate(`./path${number}`, {});
  };
  const BackgroundStyleSheet = styled.div`
    .background-stylesheet {
      display: inline-flex;
      gap: 10px;
      button {
        padding: 5px;
      }
    }
  `;
  return (
    <BackgroundStyleSheet>
      <div className="background-stylesheet">
        <h1>123123123!!!!!!!!!</h1>
        <button onClick={() => navigateToPage1()}>navigate to page 1a</button>
        <button onClick={() => navigateToPageChild(1)}>
          navigate to page child 1
        </button>
        <button onClick={() => navigateToPageChild(2)}>
          navigate to page child 2
        </button>
        <button onClick={() => navigateToPageChild(3)}>
          navigate to page child 3
        </button>
      </div>
      <Outlet />
    </BackgroundStyleSheet>
  );
};
