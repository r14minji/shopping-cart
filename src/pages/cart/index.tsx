import { useQuery } from "react-query"
import CartList from "../../components/cart"
import { CartType, GET_CART } from "../../graphql/carts"
import { graphqlFetcher, QueryKeys } from "../../queryClient"

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART))
  //console.log(data)

  const cartItems = Object.values(data || {}) as CartType[]
  if(!cartItems.length) return <div>장바구니가 비어있어요</div>


  return <CartList items={cartItems} />
}

export default Cart