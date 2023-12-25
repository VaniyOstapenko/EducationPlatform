import bcrypt from 'bcrypt';
import { getUserByEmailDB, registrationUserDB } from '../repository/api.repository';
import { iUser } from '../interfaces/interfaces';
import ExceptionType from '../helper/exception';

async function registrationUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error(ExceptionType.DATA_API_FOUND_USER);
  const salt = 10;
  const hashPwd = await bcrypt.hash(pwd, salt);
  const data = await registrationUserDB(name, surname, email, hashPwd);
  if (!data.length) throw new Error(ExceptionType.DATA_API_LENGTH);

  return data;
}

async function authUser(email: string, pwd: string) {
  const user = await getUserByEmailDB(email);
  if (!user.length) throw new Error(ExceptionType.DATA_AUTH_USER);

  if (!(await bcrypt.compare(pwd, user[0].pwd))) throw new Error(ExceptionType.DATA_AUTH_PWD);
  return user;
}

export { registrationUser, authUser };
