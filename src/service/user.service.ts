import { getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';
import { iUser } from '../interfaces/interfaces';
import ExceptionType from '../helper/exception';

async function getAllUsers(): Promise<iUser[]> {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_GET_ALL_USERS);

  return data;
}

async function getUserById(id: number): Promise<iUser[]> {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_GET_USER_BY_ID);

  return data;
}

async function updateUser(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const data = await updateUserDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_UPDATE_USER);

  return data;
}

async function deleteUser(id: number): Promise<iUser[]> {
  const data = await deleteUserDB(id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_DELETE_USER);

  return data;
}

export { getAllUsers, getUserById, updateUser, deleteUser };
