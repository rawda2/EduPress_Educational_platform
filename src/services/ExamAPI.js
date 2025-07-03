import axios from 'axios';

const BASE_URL = 'https://edu-master-delta.vercel.app';

// Create axios instance with base config
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.token = token;
  }
  return config;
});

export const examApi = {
  // Start exam
  startExam: async (examId) => {
    const response = await api.post(`/studentExams/start/${examId}`);
    return response.data;
  },

  // Get remaining time for exam
  getRemainingTime: async (examId) => {
    const response = await api.get(`/studentExams/exams/remaining-time/${examId}`);
    return response.data;
  },

  // Submit exam answers
  submitExam: async (examId, answers) => {
    const response = await api.post(`/studentExams/submit/${examId}`, {
      answers
    });
    return response.data;
  },

  // Get student's exam score
  getExamScore: async (examId) => {
    const response = await api.get(`/studentExams/exams/score/${examId}`);
    return response.data;
  },

  // Get all student scores for exam (admin only)
  getAllExamScores: async (examId, studentName = null) => {
    const params = studentName ? { studentName } : {};
    const response = await api.get(`/studentExams/exams/${examId}`, { params });
    return response.data;
  }
};