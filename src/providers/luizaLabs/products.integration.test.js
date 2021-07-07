const supertest = require('supertest')
const request = supertest('http://challenge-api.luizalabs.com/api/')

describe('Luiza Labs integration', () => {
  it('should connect with Luiza Labs endpoint', async () => {
    const response = await request.get('product/?page=1')

    expect(response.status).toBe(200)
  })

  it('should return a list of products', async () => {
    const response = await request.get('product/?page=1')

    expect(response.body).toHaveProperty('products')
    expect(response.body.products.length).toBeGreaterThan(0)
  })

  it('should return a single product', async () => {
    const getProduct = await request.get('product/?page=1')
    const productId = getProduct.body.products[0].id

    const response = await request.get(`product/${productId}/`)

    expect(response.status).toBe(200)
  })

  it('should not return a product searching by the wrong id', async () => {
    const productId = 'wrongId'
    const response = await request.get(`product/${productId}/`)

    expect(response.status).toBe(404)
  })

  it('should return the product with the correct fields', async () => {
    const getProduct = await request.get('product/?page=1')
    const productId = getProduct.body.products[0].id

    const response = await request.get(`product/${productId}/`)

    expect(response.body).toHaveProperty('price')
    expect(response.body).toHaveProperty('image')
    expect(response.body).toHaveProperty('brand')
    expect(response.body).toHaveProperty('id')
    expect(response.body).toHaveProperty('title')
  })
})