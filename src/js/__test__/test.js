import getLevel from '../getLevel';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('testing getLevel function with level 1 and ok status', () => {
  const fakeDataOk = {
    name: 'test',
    id: '1',
    level: '1',
    status: 'ok',
  };
  fetchData.mockReturnValue(fakeDataOk);
  expect(getLevel(1)).toEqual('Ваш текущий уровень: 1');
});

test('testing getLevel function with status 400', () => {
  const fakeDataOk = {
    name: 'test',
    id: '1',
    level: '1',
    status: '400',
  };
  fetchData.mockReturnValue(fakeDataOk);
  expect(getLevel(1)).toEqual('Информация об уровне временно недоступна');
});
