import { useState, useEffect } from "react";
import axios from "axios";

const useFetchHistory = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/searchhistory"
                ); // Replace with your API endpoint for fetching history
                setHistory(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    return { history, loading, error };
};

export default useFetchHistory;
