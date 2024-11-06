import { Html, useProgress } from "@react-three/drei";

export const Loading = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <p
        style={{
          fontSize: 16,
          color: "white",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
