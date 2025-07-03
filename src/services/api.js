const BASE_URL = "https://edu-master-delta.vercel.app";

const ALL_ADMIN_URL = `${BASE_URL}/admin/all-admin`;
const USER_URL = `${BASE_URL}/user`;
const ALL_USERS_URL = `${BASE_URL}/admin/all-user`;

const AUTH_URL = `${BASE_URL}/auth`;
const LOGIN_URL = `${AUTH_URL}/login`;
const SIGNUP_URL = `${AUTH_URL}/signup`;
const FORGOT_PASSWORD_URL = `${USER_URL}/forgot-password`;
const RESET_PASSWORD_URL = `${USER_URL}/reset-password`;

const ALL_LESSONS_URL = `${BASE_URL}/lesson`;
const ALL_EXAMS_URL = `${BASE_URL}/exam`;
const ALL_QUESTIONS_URL = `${BASE_URL}/question`;

export {
  BASE_URL,
  ALL_ADMIN_URL,
  ALL_USERS_URL,
  USER_URL,
  LOGIN_URL,
  SIGNUP_URL,
  FORGOT_PASSWORD_URL,
  RESET_PASSWORD_URL,
  ALL_LESSONS_URL,
  ALL_EXAMS_URL,
  ALL_QUESTIONS_URL,
};
