function Product(props){ //{x:{produtObj:{}}}   
   const {productObj}=props
  //state
  //return a react element
  return (
    <div className="bg-white shadow-lg  rounded-xl  bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-4">
      
      <h2 className="text-lg mb-2">
        {productObj.title}
      </h2>

      <p className="text-blue-700 text-sm mb-2">
        {productObj.category}
      </p>

      <p className="text-green-600 font-bold mb-2">
        {productObj.price}
      </p>

      <p className="text-red-600 text-sm">
         {productObj.rating.rate} ({productObj.rating.count})
      </p>

    </div>
  )
}
export default Product