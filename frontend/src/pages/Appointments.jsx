
import axios from 'axios';
//This page will show my-appointsments ---> history of user.
import React from 'react'
// Mock data for appointments
const mockAppointments = [
  { id: 1, patientName: 'John Doe', date: '2025-04-21', time: '10:00 AM', status: 'Scheduled' },
  { id: 2, patientName: 'Jane Smith', date: '2025-04-22', time: '2:00 PM', status: 'Scheduled' },
];

// Mock data for doctor profile
const mockProfile = {
  name: 'Dr. Alice Cooper',
  specialty: 'Cardiologist',
  email: 'alice@hospital.com',
};

// Function to fetch appointments (mocked)
export const fetchAppointments = async () => {
  // Mock API response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockAppointments });
    }, 1000); // Simulate network delay
  });
};

// Function to fetch doctor profile (mocked)
export const fetchDoctorProfile = async () => {
  // Mock API response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockProfile });
    }, 1000); // Simulate network delay
  });
};

