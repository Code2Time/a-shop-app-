import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ShoppingCardProvider {
  children: React.ReactNode;
}

interface ShopingCardContext {
  user: ShoppingUser[],
  cartItems: IcartItems[],
  HandleIncreaseProductQty : (id : number) => void
}
interface IcartItems {
  id: number,
  qty: number
}

interface ShoppingUser {
  image: string;
  email: string;
  id: number;
  name: string;
}

export const ShopingCardContext = createContext(
  {} as ShopingCardContext
); /*create context*/

export const useShopingCardContext = () => {
  return useContext(ShopingCardContext);
};

export function ShoppingCardProvider({ children }: ShoppingCardProvider) {
  const [user, setUser] = useState<ShoppingUser[]>([]);
  const [cartItems, setCartItems] = useState<IcartItems[]>([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setUser(res.data));
  }, []);


 const HandleIncreaseProductQty = (id : number) =>{
    setCartItems(currentitems => {
      let selected = cartItems.find(item => item.id == id)
      if(selected == null){
        return [...cartItems , {id : id , qty : 1}]
      }
      else{
        return currentitems.map(item =>{
          if(item.id == id){
            return {...item , qty : item.qty + 1}
          }
          else{
            return item
          }
        })
      }
    })
 }

  return (
    <ShopingCardContext.Provider value={{ user , cartItems , HandleIncreaseProductQty}}>
      {children}
    </ShopingCardContext.Provider>
  );
}
