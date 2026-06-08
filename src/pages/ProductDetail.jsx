import React , {useEffect,useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import {initialProducts} from '../data/product'
import { ChevronLeft } from 'lucide-react';

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setproduct] = useState();
  useEffect(()=>{
    setproduct(initialProducts.find(p=>p.id === parseInt(id)))
  },[id])

  return <>
  <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
    <Link to={'/'}>
    <button className=' cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold'>
      <ChevronLeft className="w-6 h-6 mr-1"/>
      <span>Back to Products</span>
    </button>
    </Link>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
      <div className="w-full">
        <img src={product.image} alt={product.name} className="w-[400px] h-[400px] object-cover rounded-2xl shadow-gray-950/50 border-4  border-gray-800"/>
      </div>
    <div className='flex flex-col justify-between'>
    <div className='text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter'>{product.name}</div>
    </div>
    <p className="text-3xl font-extrabold text-orange-400 mb-4 ">Rs.{product.price.toFixed(2)}</p>
    
    </div>
  </div>
  </>;
};

export default ProductDetail;