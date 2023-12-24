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
  DATA_VALID_SERVICE_UPDATE: string;
  DATA_VALID_SERVICE_DELETE: string;
}

interface iCourses {
  id: number;
  course: string;
}

export { iUser, isValid, iCourses };
