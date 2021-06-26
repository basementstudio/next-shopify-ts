type Image = {
  src: string
  alt?: string | null
}

type Option = {
  name: string
  values: string[]
}

type Variant = {
  id: string
  name: string
  price: string
  color: string | null
  size: string | null
  isAvailable: boolean
}

export type Product = {
  images: Image[]
  id: string
  name: string
  description: string
  price: string
  slug: string
  options: Option[]
  variants: Variant[]
}

type LineItem = {
  id: string
  title: string
  quantity: number
  variant: {
    image: { src: string; altText?: string }
    price: string
    selectedOptions: { name: string; value: string }[]
  }
}

export type Cart = Omit<ShopifyBuy.Cart, 'checkoutUrl' | 'lineItems'> & {
  webUrl: string
  lineItems: LineItem[]
}
