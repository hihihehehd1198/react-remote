import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Entity: FC = () => {
  const navigate = useNavigate();
  const navigateToPage1 = () => {
    return navigate("./page1", { relative: "path", replace: false });
  };
  return (
    <div>
      <h1>123123123!!!!!!!!!</h1>
      <button onClick={navigateToPage1}>navigate to page 1a</button>
    </div>
  );
};
