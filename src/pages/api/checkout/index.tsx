import { badRequest, internalServerError, success } from 'lib/api-responses'
import { client } from 'lib/shopify'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case 'GET': {
        const checkout = await client.checkout.create()
        success(res, { checkout })
        break
      }
      default:
        badRequest(res, `Request method ${req.method} not supported.`)
        break
    }
  } catch (error) {
    internalServerError(res, error)
  }
}
