import { registrationUser, authUser } from '../../service/api.service';
import * as repository from '../../repository/api.repository';
import ExceptionType from '../../helper/exception';
import bcrypt from 'bcrypt';
import { mock } from 'node:test';

describe('test registrationUser function', () => {
  test('succees', async () => {
    const mockHash = jest.spyOn(bcrypt, 'hash');
    mockHash.mockResolvedValue('vcbdfg234');
    const repFunction = jest.spyOn(repository, 'registrationUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
    const result = await registrationUser('Ivan', 'Ostapenko', 'Osta@mail.com', 'Vaniy245');
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Ivan');
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
    expect(mockHash).toHaveBeenCalled()
  });

  test('error getUserByEmail from registrationUser', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
    try {
      await registrationUser('Ivan', 'Ostapenko', 'Osta@mail.com', 'Vaniy245');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_API_FOUND_USER);
    }
  });

  test('error', async () => {
    const repFunction2 = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction2.mockResolvedValue([]);
    const repFunction = jest.spyOn(repository, 'registrationUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await registrationUser('Ivan', 'Ostapenko', 'Osta@mail.com', 'Vaniy245');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_API_LENGTH);
    }
  });
});

describe('test authUser function', () => {
  test('success', async () => {
    const repFunction2 = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction2.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
    const repFunction = jest.spyOn(bcrypt, 'compare');
    repFunction.mockResolvedValue(true);
    const result = await authUser('Ostapeko@mail.com', 'Vaineg2352');
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result.length).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
  });

  test('error getUserByEmail from authUser', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction.mockResolvedValue([]);
    try {
      await authUser('Osta@mail.com', 'Vaniy245');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_AUTH_USER);
    }
  });

  test('error pwd fron authUser function', async () => {
    const repFunction2 = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction2.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
    const repFunction = jest.spyOn(bcrypt, 'compare');
    repFunction.mockResolvedValue(false);
    try {
      await authUser('Osta@mail.com', 'Vaniy245');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_AUTH_PWD);
    }
  });
});
