import { useEffect, useState } from "react";

const App = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    const fetchPerfumes = async () => {
      const response = await fetch("http://localhost:8000/brands/");
      const result = await response.json(response);
      setPerfumes(result);
    };
    fetchPerfumes();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgb(120, 52, 90)",
      }}
    >
      <h1
        style={{
          fontSize: 44,
          color: "yellow",
          fontWeight: "bold",
        }}
      >
        perfumes
      </h1>
      <div>
        {perfumes.map((perfume) => (
          <div
            style={{
              padding: 15,
              fontSize: 24,
              color: "yellow",
              borderRadius: 5,
              border: "2px solid yellow",
            }}
          >
            {perfume.brand_name}
            {<img className="dog-image" alt="Dog" src={perfume.logo} height='50' width='200' ></img>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;