import { registrationUser} from '../../service/api.service';
import * as repository from '../../repository/api.repository';
import ExceptionType from '../../helper/exception';

describe('test registrationUser function', () => {
  test('succees', async () => {
    const repFunction = jest.spyOn(repository, 'registrationUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
    const result = await registrationUser('Ivan', 'Ostapenko', 'Osta@mail.com', 'Vaniy245');
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Ivan');
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Osta@mail.com', pwd: 'Vaniy245' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'registrationUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await registrationUser('Ivan', 'Ostapenko', 'Osta@mail.com', 'Vaniy245');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_API_LENGTH);
    }
  });
});
