import { useState, useEffect } from "react";
import axios from "axios";

const useFetchItems = () => {
    const [savedItems, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:3001/item");
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return { savedItems, loading, error };
};

export default useFetchItems;
