/* --- LOCALSTORAGE --- */
//traer productos localstorage
export const handleGetProductLocalStorage = () =>{
    const products = JSON.parse(localStorage.getItem("products"));

    if(products){
        return products;
    }else{
        return [];
    }
}; 

//guardar en localStorage
//recibir un producto
export const setInLocalStorage = (productIn) =>{

    //traerlos elementos
    let productoInLocal = handleGetProductLocalStorage();

    const existingIndex = productoInLocal.findIndex((productsLocal) => productsLocal.id === productIn.id)
    
    //verificar si el producto existe
    if(existingIndex !== -1){
         //si existe deve reemplazarse
         productoInLocal[existingIndex] = productIn;
    }else{
        //si no agregarse
        productoInLocal.push(productIn);
    }
    
    //setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productoInLocal));
}
