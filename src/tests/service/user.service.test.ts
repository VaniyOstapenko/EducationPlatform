import { getAllUsers, getUserById, updateUser, deleteUser } from '../../service/user.service';
import * as repository from '../../repository/user.repository';
import ExceptionType from '../../helper/exception';
import { describe } from 'node:test';

describe('test getAllUsers function', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUsersDB');
    repFunction.mockResolvedValue([
      { id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' },
      { id: 2, name: 'Anton', surname: 'Ostapenko', email: 'anfreed@mail.com', pwd: 'pups-1992' },
    ]);
    const result = await getAllUsers();
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
    expect(result[0].name).toBe('Ivan');
    expect(result[0].surname).toBe('Ostapenko');
    expect(result).toEqual([
      { id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' },
      { id: 2, name: 'Anton', surname: 'Ostapenko', email: 'anfreed@mail.com', pwd: 'pups-1992' },
    ]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUsersDB');
    repFunction.mockResolvedValue([]);
    try {
      await getAllUsers();
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_GET_ALL_USERS);
    }
  });
});

describe('test getUserById function', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByIdDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
    const result = await getUserById(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByIdDB');
    repFunction.mockResolvedValue([]);
    try {
      await getUserById(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_GET_USER_BY_ID);
    }
  });
});

describe('test updateUser', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
    const result = await updateUser(1, 'Ivan', 'Ostapenko', 'ostap@mail.com', 'Vaniy29');
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Ivan');
    expect(result[0].surname).toBe('Ostapenko');
    expect(result[0].email).toBe('ostap@mail.com');
    expect(result[0].pwd).toBe('Vaniy29');
    expect(result.length).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
    try {
      await updateUser(1, 'Ivan', 'Ostapenko', 'ostap@mail.com', 'Vaniy29');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_UPDATE_USER);
    }
  });
});

describe('test deleteUser function', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
    const result = await deleteUser(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].email).toBe('ostap@mail.com');
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'ostap@mail.com', pwd: 'Vaniy29' }]);
    try {
      await deleteUser(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_DELETE_USER);
    }
  });
});
