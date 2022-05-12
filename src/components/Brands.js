import { useEffect, useState } from "react";

const Brands = () => {
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
        <div>
            <h1>perfumes</h1>
            <div>
                {perfumes.map((perfume) => (
                    <div>
                        {perfume.brand_name}
                        {<img alt="brand" src={perfume.logo} height="50" width="200"></img>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands