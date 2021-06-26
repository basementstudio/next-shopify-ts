import Client from 'shopify-buy'
import { Product } from 'ts/models'

const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

if (typeof domain !== 'string' || typeof storefrontAccessToken !== 'string') {
  throw new Error(
    `domain (${domain}) and storefrontAccessToken (${storefrontAccessToken}) must be strings`
  )
}

export const client = Client.buildClient({ domain, storefrontAccessToken })

function formatProduct(shopifyProduct: ShopifyBuy.Product): Product {
  return {
    id: shopifyProduct.id.toString(),
    name: shopifyProduct.title,
    description: shopifyProduct.description,
    price: shopifyProduct.variants[0].price,
    images: shopifyProduct.images.map((img) => ({
      src: img.src,
      alt: (img as any).altText ?? null
    })),
    slug: (shopifyProduct as any).handle as string,
    options: shopifyProduct.options.map((o) => ({
      name: o.name,
      values: o.values.map((v) => v.value)
    })),
    variants: shopifyProduct.variants.map((v) => {
      const color = (v as any)?.selectedOptions?.find(
        (o: any) => o.name === 'Color'
      )?.value
      const size = (v as any)?.selectedOptions?.find(
        (o: any) => o.name === 'Size'
      )?.value

      return {
        id: v.id.toString(),
        name: v.title,
        price: v.price,
        isAvailable: v.available,
        color: color ?? null,
        size: size ?? null
      }
    })
  }
}

export const getAllProducts = async (): Promise<Product[]> => {
  const products = await client.product.fetchAll()
  return products.map((p) => {
    return formatProduct(p)
  })
}

export const getProductByHandle = async (handle: string): Promise<Product> => {
  const product = await client.product.fetchByHandle(handle)
  return formatProduct(product)
}
