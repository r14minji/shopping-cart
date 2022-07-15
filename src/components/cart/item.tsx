import { CartType } from "../../graphql/carts";

const CartItem = ({
  id,
  imageURL,
  price,
  title,
  amount
}: CartType) => (
  <li>
    {id} {imageURL} {price} {title} {amount}
  </li>
)

export default CartItem