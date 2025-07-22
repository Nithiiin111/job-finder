import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import jobsData from '../data/jobs.json';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Home;
