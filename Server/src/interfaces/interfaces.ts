interface iUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  pwd: string;
}

interface isValid {
  DATA_VALID_SERVICE_GET_ALL_USERS: string;
  DATA_VALID_SERVICE_GET_USER_BY_ID: string;
  DATA_VALID_SERVICE_UPDATE_USER: string;
  DATA_VALID_SERVICE_DELETE_USER: string;

  DATA_VALID_SERVICE_GET_ALL_COURSE: string;
  DATA_VALID_SERVICE_GET_COURSE_BY_ID: string;
  DATA_VALID_SERVICE_CREATE_COURSE: string;
  DATA_VALID_SERVICE_UPDATE_COURSE: string;
  DATA_VALID_SERVICE_DELETE_COURSE: string;

  DATA_VALID_SERVICE_GET_ALL_LESSONS: string;
  DATA_VALID_SERVICE_GET_LESSONS_BY_ID: string;
  DATA_VALID_SERVICE_CREATE_LESSONS: string;
  DATA_VALID_SERVICE_UPDATE_LESSONS: string;
  DATA_VALID_SERVICE_DELETE_LESSONS: string;

  DATA_API_FOUND_USER: string;
  DATA_API_LENGTH: string;
  DATA_AUTH_USER: string;
  DATA_AUTH_PWD: string;

  DATA_USER_NAME: string;
  DATA_USER_SURNAME: string;
  DATA_USER_EMAIL: string;
  DATA_USER_PWD: string;
  DATA_NAME_IS_NAN: string;
  DATA_SURNAME_IS_NAN: string;
  DATA_PWD_LENGTH: string;
  DATA_EMAIL: string;
  DATA_ID: string;
}

interface iCourses {
  id: number;
  course: string;
  description: string;
}

interface iLessons {
  id: number;
  title: string;
  course_id: number;
}

export { iUser, isValid, iCourses, iLessons };
