import { useState, useEffect } from "react";
import axios from "axios";

const useFetchGroups = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get("http://localhost:3001/group"); // Replace with your API endpoint for fetching groups
                setGroups(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchGroups();
    }, []);

    return { groups, loading, error };
};

export default useFetchGroups;
