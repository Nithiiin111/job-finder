// pages/JobDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import jobsData from '../data/jobs.json';

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === parseInt(id));

  if (!job) return <h2>Job not found</h2>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Skills:</strong> {job.skills.join(', ')}</p>
    </div>
  );
};

export default JobDetailsPage;
