import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Page1: FC = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Page1 al;skdjokạkjcomponent work!!!!!!!!!!</h2>
      <button onClick={navigateBack}>navigate back</button>
    </div>
  );
};
