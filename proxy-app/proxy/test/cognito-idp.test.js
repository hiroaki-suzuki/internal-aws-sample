const request = require('supertest');
const app = require('../app');

describe('ルートパスのテスト', () => {
  test('ルートのリクエストは成功すること', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('It works!');
  });
});

describe('cognito-idpのテスト', () => {
  test('定義漏れがあった場合は500エラーになること', async () => {
    const response = await request(app).post('/auth-idp').set({ 'X-Amz-Target': 'no-target' });
    expect(response.statusCode).toBe(500);
    expect(response.body).toStrictEqual({ message: 'cognito-idpへのリクエストで定義漏れがありました。 - no-target' });
  });
});
