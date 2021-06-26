import PageLayout from 'components/layout/page'
import Button from 'components/primitives/button'
import { useShopify } from 'context/shopify'
import { getAllProducts } from 'lib/shopify'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Product } from 'ts/models'

type Props = {
  products: Product[]
}

const HomePage = ({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { cart } = useShopify()
  console.log(products)
  console.log(cart)
  return (
    <PageLayout>
      <Button>Hola!</Button>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await getAllProducts()
  return {
    props: { products },
    revalidate: 1
  }
}

export default HomePage
