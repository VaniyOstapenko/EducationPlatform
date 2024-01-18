import ExceptionType from './exception';

function isValidUserBody(req, res, next) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error(ExceptionType.DATA_USER_NAME);
  if (!surname) throw new Error(ExceptionType.DATA_USER_SURNAME);
  if (!email) throw new Error(ExceptionType.DATA_USER_EMAIL);
  if (!pwd) throw new Error(ExceptionType.DATA_USER_PWD);
  if (!isNaN(name)) throw new Error(ExceptionType.DATA_NAME_IS_NAN);
  if (!isNaN(surname)) throw new Error(ExceptionType.DATA_SURNAME_IS_NAN);
  if (pwd.length < 8) throw new Error(ExceptionType.DATA_PWD_LENGTH);
  if (!/^[\w\S+]+@[a-z]+\.[a-z]{2,5}$/gm.test(email)) throw new Error(ExceptionType.DATA_EMAIL);
  next();
}

function isValidId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error(ExceptionType.DATA_ID);
  if (id < 1) throw new Error(ExceptionType.DATA_ID);

  next();
}

export { isValidUserBody, isValidId };
