// src/services/AdminAPI.js
import { BASE_URL } from "./AuthAPI";

// ========== Admin & User Management ==========
const CREATE_ADMIN_URL = `${BASE_URL}/admin/create-admin`;
const GET_ALL_ADMINS_URL = `${BASE_URL}/admin/all-admin`;
const GET_ALL_USERS_URL = `${BASE_URL}/admin/all-user`;
const GET_CURRENT_USER_URL = `${BASE_URL}/user/`; // ✅ Get currently logged-in user (admin or user)

// ========== Lessons ==========
const GET_LESSONS_URL = `${BASE_URL}/lesson`;

// ========== Exams ==========
const ADD_EXAM_URL = `${BASE_URL}/exams`; // POST
const GET_EXAMS_URL = `${BASE_URL}/exam`; // GET all exams
const GET_EXAM_BY_ID_URL = (examId) => `${BASE_URL}/exam/get/${examId}`; // GET one exam
const UPDATE_EXAM_URL = (examId) => `${BASE_URL}/exam/${examId}`; // PUT
const DELETE_EXAM_URL = (examId) => `${BASE_URL}/exam/${examId}`; // DELETE

// ========== Questions ==========
const ADD_QUESTION_URL = `${BASE_URL}/question`; // POST
const GET_ALL_QUESTIONS_URL = `${BASE_URL}/question`; // GET all
const GET_QUESTION_BY_ID_URL = (questionId) => `${BASE_URL}/question/get/${questionId}`; // GET one
const DELETE_QUESTION_URL = (questionId) => `${BASE_URL}/question/${questionId}`; // DELETE

export {
  // Admins & Users
  CREATE_ADMIN_URL,
  GET_ALL_ADMINS_URL,
  GET_ALL_USERS_URL,
  GET_CURRENT_USER_URL, 

  // Lessons
  GET_LESSONS_URL,

  // Exams
  ADD_EXAM_URL,
  GET_EXAMS_URL,
  GET_EXAM_BY_ID_URL,
  UPDATE_EXAM_URL,
  DELETE_EXAM_URL,

  // Questions
  ADD_QUESTION_URL,
  GET_ALL_QUESTIONS_URL,
  GET_QUESTION_BY_ID_URL,
  DELETE_QUESTION_URL,
};
