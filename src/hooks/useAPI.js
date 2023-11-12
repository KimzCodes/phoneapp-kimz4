import { useState, useCallback } from "react";
import axios from "axios";
const useAPI = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const callApi = useCallback(async (data) => {
    try {
      setLoading(true);
      const response = await axios({ ...data });
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);

      setError(error.message);
    }
  }, []);

  return { loading, error, callApi };
};

export default useAPI;
