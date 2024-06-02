import { useEffect, useState } from "react";
import CategoryItem from "../categoryItem/CategoryItem";
import axios from "axios";
import { Icategory } from "../types/Iproducts";

const Category = () => {
  const [category, setCategory] = useState<Icategory[]>([]);
  var categorys = [];
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories ")
      .then((res) => setCategory(res.data));
  }, []);
  categorys = category.slice(1);

  return (
    <div className="grid grid-cols-12 gap-2 mt-14 p-10 sm:p-0">
      {categorys.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Category;
