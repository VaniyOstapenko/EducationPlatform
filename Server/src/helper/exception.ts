import { isValid } from '../interfaces/interfaces';

const ExceptionType: isValid = {
  DATA_VALID_SERVICE_GET_ALL_USERS: 'no data - get users',
  DATA_VALID_SERVICE_GET_USER_BY_ID: 'no data - get user by id',
  DATA_VALID_SERVICE_UPDATE_USER: 'no data - updateUser',
  DATA_VALID_SERVICE_DELETE_USER: 'no data - deleteUser',

  DATA_VALID_SERVICE_GET_ALL_COURSE: 'no data - get course',
  DATA_VALID_SERVICE_GET_COURSE_BY_ID: 'no data - get course by id',
  DATA_VALID_SERVICE_CREATE_COURSE: 'no data - create course',
  DATA_VALID_SERVICE_UPDATE_COURSE: 'no data - updateCourse',
  DATA_VALID_SERVICE_DELETE_COURSE: 'no data - deleteCorse',

  DATA_VALID_SERVICE_GET_ALL_LESSONS: 'no data - get lessons',
  DATA_VALID_SERVICE_GET_LESSONS_BY_ID: 'no data - get lessons by id',
  DATA_VALID_SERVICE_CREATE_LESSONS: 'no data - create lessons',
  DATA_VALID_SERVICE_UPDATE_LESSONS: 'no data - updateLessons',
  DATA_VALID_SERVICE_DELETE_LESSONS: 'no data - deleteLessons',

  DATA_API_FOUND_USER: 'user allready exsist',
  DATA_API_LENGTH: 'no data - registration api',
  DATA_AUTH_USER: 'not user',
  DATA_AUTH_PWD: 'not pwd',

  DATA_USER_NAME: 'missing name',
  DATA_USER_SURNAME: 'missing surname',
  DATA_USER_EMAIL: 'missing email',
  DATA_USER_PWD: 'missing pwd',
  DATA_NAME_IS_NAN: 'can not ne a number',
  DATA_SURNAME_IS_NAN: 'can not be a number',
  DATA_PWD_LENGTH: 'can not be < 8',
  DATA_EMAIL: 'email entry error',
  DATA_ID: 'input error',
};

export default ExceptionType;
