import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductsData } from "../pages/Store/ProductsData";
import { useLocaStage } from "../hook/useLocalStorage";

interface ShoppingCardProvider {
  children: React.ReactNode;
}

interface ShopingCardContext {
  user: ShoppingUser[],
  cartItems: IcartItems[],
  HandleIncreaseProductQty : (id : number) => void,
  HandleDecreaseProductQty : (id : number) => void,
  GetProductQty : (id : number) => number,
  HandleRemoveProduct : (id : number) => void,
  CartQty : number
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
  const [cartItems, setCartItems] = useLocaStage<IcartItems[]>("cartItems" , []);

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
 
 const HandleDecreaseProductQty = (id : number) =>{
  setCartItems(currentitems => {
    let selected = cartItems.find(item => item.id == id)
    if(selected?.qty === 1){
      return currentitems.filter(item => item.id !== id)
    }
    else{
      return currentitems.map(item =>{
        if(item.id == id){
          return {...item , qty : item.qty - 1}
        }
        else{
          return item
        }
      })
    }
  })
}


const HandleRemoveProduct = (id : number)=>{
  setCartItems(currentItems => currentItems.filter(item => item.id != id))
}

const GetProductQty = (id : number)=>{                                /* for show qty product */
  return cartItems.find(item => item.id == id)?.qty || 0    
}

const CartQty = cartItems.reduce((totalQty , item)=> totalQty + item.qty  , 0)


  return (
    <ShopingCardContext.Provider value={{CartQty , user , cartItems , HandleIncreaseProductQty , HandleDecreaseProductQty , GetProductQty , HandleRemoveProduct}}>
      {children}
    </ShopingCardContext.Provider>
  );
}
