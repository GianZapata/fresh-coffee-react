import { describe, expect, test } from 'vitest';
import freshCoffeeApi from '../../api/freshApi';

describe('Fresh Coffee Api', () => {
  test('Axios debe de estar configurado con la url del api ', () => {
    expect(freshCoffeeApi.defaults.baseURL).toBe('http://localhost:8000');
  });
});
