import request from 'supertest';
import app from '../../app';

describe('GET /', () => {
  it('should return server working', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Server working" });
  });
});
