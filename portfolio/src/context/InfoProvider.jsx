import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import InfoContext from './InfoContext';

const BASE_URL = "http://localhost:5000";

const fetchData = async (url, setData, setError) => {
  try {
    const response = await Axios.get(url);
    setData(response.data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    setError(true);
  }
};

const InfoProvider = ({ children }) => {
  const [allProjects, setAllProjects] = useState([]);
  const [allCertificates, setAllCertificates] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [allMessage, setAllMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      await Promise.all([
        fetchData(`${BASE_URL}/project/getAllProject`, setAllProjects, setError),
        fetchData(`${BASE_URL}/certificate/getAllCertificate`, setAllCertificates, setError),
        fetchData(`${BASE_URL}/contact/getAllMessages`, setAllMessage, setError),
        fetchData(`${BASE_URL}/course/getAllCourse`, setAllCourses, setError)
      ]);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <InfoContext.Provider value={{ allProjects, allCertificates, allCourses, BASE_URL, allMessage }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;
