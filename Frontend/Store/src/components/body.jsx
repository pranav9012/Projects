import React, { useEffect, useState } from "react";
// import { formattedItems } from '../items';
import fetchProducts from "./APIs/productAPI";
import Card from "./card";
function Body({CustomFilter}){
    console.log(CustomFilter == "");
    // Object.keys(formattedItems).map((title, index) => {
    //     console.log(formattedItems + index);
    // })
    // console.log(formattedItems);
    // Object.keys(formattedItems).map((title, index) => console.log(formattedItems[title] + index + title))
    // console.log(formattedItems['ABSOLUTE DEFENSE Hoodie']);
    // const formattedItems = async() => await fetchProducts();
    const [products, setProducts] = useState({});
    useEffect(() => {
        const handleFetchProducts = async () => {
          const products = await fetchProducts();
          setProducts(products); // update the state with the fetched products
        };
        handleFetchProducts();
      }, []);

    // console.log(products);
    return(
        <div className="flex flex-wrap h-full w-full pb-20 items-center justify-start">
            {Object.keys(products).map((index) =>{
                if(CustomFilter == ""){
                    return(<Card
                        key={index} 
                        item={products[index]}
                        title={products[index].title} 
                    />);
                }
                else{
                    if(products[index].category.includes(CustomFilter)){
                        return(<Card
                            key={index} 
                            item={products[index]}
                            title={products[index].title} 
                        />);
                    }
                }
        })}
        </div>
    )
}

export default Body;