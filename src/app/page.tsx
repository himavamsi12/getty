import Image from 'next/image'
import fruits from "./assessts/fruits.jpg"
import { FaPlus } from "react-icons/fa6";
import { IoIosDownload } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "./assessts/img1.jpg"
import img2 from "./assessts/img2.jpg"
import img3 from "./assessts/img3.jpg"
import img4 from "./assessts/img4.jpg"
import img5 from "./assessts/img5.jpg"


export default function Home() {
  return (
    <>
    <div className='flex flex-col md:flex md:flex-row'>
    <div className='min-h-[50%] bg-cover bg-center flex items-center justify-center w-full md:min-h-screen md:bg-cover md:bg-center md:flex md:items-center md:justify-center md:w-8/12   ' style={{
        backgroundImage: `url('${fruits.src}')`,
        
      }}>
        <div className=' w-full min-h-[50%] backdrop-blur-lg flex flex-col md:w-full md:min-h-full md:backdrop-blur-lg md:flex md:flex-col md:justify-center'>
          <div className='flex flex-col items-start p-5 md:none'>
          <p className='text-white text-lg p-2'>Various fruits and berries - stock photo</p>
          <p className='text-white text-sm pl-3 pb-4'>Full frame of various fruits and berries. Top view of blackberries, raspberries, strawberries, plums, peaches, apricots and apples.</p>
          </div>
          <Image src={fruits} width={700} height={700}alt="Picture of the author" className='md:ml-16 '/>
        <div className='flex flex-row justify-center mt-5 md:hidden'>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-white bg-black/75 flex mr-2 mb-4 ' ><FaPlus size={20} className="mt-0.5 ml-1 mr-2"/></button>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-white bg-black/75 flex mr-2 mb-4' ><IoIosDownload size={20} className="mt-0 ml-1 mr-2"/></button>
      
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-black  flex mr-2 mb-4' ><MdOutlinePhotoSizeSelectActual size={20} className="mt-0.5 ml-1 mr-2"/></button>
        </div>
        <div className='hidden md:flex md:flex-row md:justify-center md:mt-5 mb-16'>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-white bg-black/75 flex mr-2' ><FaPlus size={20} className="mt-0.5 mr-2"/>Save</button>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-white bg-black/75 flex mr-2' ><IoIosDownload size={20} className="mt-0.5 mr-2"/>Comp</button>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-black  flex mr-2' ><FaCode size={20} className="mt-0.5 mr-2"/>Embeded</button>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-black  flex mr-2' ><MdOutlinePhotoSizeSelectActual size={20} className="mt-0.5 mr-2"/>Buy print</button>
        </div>
        
    
    </div>
    </div>
    
    {/*<div className='min-h-screen sm:bg-cover bg-center flex items-center justify-center w-full md:invisible' style={{
        backgroundImage: `url('${fruits.src}')`,
        
      }}>
        <div className='w-full min-h-screen backdrop-blur-lg flex flex-col '>
          <div className='flex flex-col items-start p-5'>
          <p className='text-white text-lg p-2'>Various fruits and berries - stock photo</p>
          <p className='text-white text-sm pl-3 pb-4'>Full frame of various fruits and berries. Top view of blackberries, raspberries, strawberries, plums, peaches, apricots and apples.</p>
          </div>
        <Image src={fruits} width={300} height={300}alt="Picture of the author" className='ml-16'/>
        <div className='flex flex-row justify-center mt-5'>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-white bg-black/75 flex mr-2' ><FaPlus size={20} className="mt-0.5 ml-1 mr-2"/></button>
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-white bg-black/75 flex mr-2' ><IoIosDownload size={20} className="mt-0 ml-1 mr-2"/></button>
      
          <button className='border-solid border-2 border-black rounded-md pl-5 pr-5 pt-2 pb-2 text-black  flex mr-2' ><MdOutlinePhotoSizeSelectActual size={20} className="mt-0.5 ml-1 mr-2"/></button>
        </div>
    
    </div>
    </div>*/}
    <div className='bg-white flex flex-col md:bg-white md:flex md:flex-col md:w-4/12'>
      <div className='flex justify-center pt-6'>
      <p className='text-black '>PURCHASE A LICENCE</p>
      
      </div>
      <p className='text-black pl-6 pt-2 text-sm'>All Royalty-Free licences include global use rights, comprehensive protection, and simple pricing with volume discounts available</p>
      <div className='border-solid border-2 border-gray-400 rounded-md m-6'>
        <div className='m-2 flex flex-row justify-between border-solid border-2  p-4 border-b-gray-400 border-t-white border-l-white border-r-white'>
          <div>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <label htmlFor="html">Small</label>
       </div>
      <p className='text-end'>₹7,000.00</p>
      
       </div>
       <div className='m-2 flex flex-row justify-between border-solid border-2 p-4 border-b-gray-400 border-t-white border-l-white border-r-white'>
          <div>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <label htmlFor="html">Medium</label>
       </div>
      <p className='text-end'>₹14,000.00</p>
      
       </div>
       <div className='m-2 flex flex-row justify-between border-solid border-2 p-4 border-b-gray-400 border-t-white border-l-white border-r-white'>
          <div>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <label htmlFor="html">Large</label>
       </div>
      <p className='text-end'>₹23,000.00</p>
      
       </div>
       <div className='m-2 flex flex-col p-4'>
          <div>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <label htmlFor="html">Market-freeze</label>
       </div>
       <p className=' text-gray-600 text-sm'>Protect your creative work  well remove this image from our site for as long as you need it.</p>
      
      
       </div>
      </div>
      <div className='flex flex-col ml-8 mr-8'>
      <p className='text-black text-3xl text-center'>₹23,000.00 INR</p>
      <button className='border-solid border-2 bg-violet-600 p-4 mt-4 rounded-md text-white'>ADD TO BASKET</button>
      <button className='border-solid border-2 bg-black p-4 mt-4 rounded-md text-white'>GET THIS IMAGE FOR ₹20,500</button>
      </div>
      <div className='flex flex-col ml-8 mr-8 mt-16 bg-gray-200 p-4 mb-4'>
        <p className='text-md text-gray-500'>DETAILS</p>
        <p className='text-sm text-gray-500'>Credit:&nbsp;&nbsp;&nbsp;&nbsp;	alvarez</p>
        <p className='text-sm text-gray-500'>Creative #:&nbsp;&nbsp;&nbsp;&nbsp;	1263891788</p>
        <p className='text-sm text-gray-500'>Licence type:&nbsp;&nbsp;&nbsp;&nbsp;	Royalty-free</p>
        <p className='text-sm text-gray-500'>Collection:&nbsp;&nbsp;&nbsp;&nbsp;	E+</p>
        <p className='text-sm text-gray-500'>Location:&nbsp;&nbsp;&nbsp;&nbsp;	Germany</p>
        <p className='text-sm text-gray-500'>Release info:&nbsp;&nbsp;&nbsp;&nbsp;	No release required</p>

      </div>
    </div>
    </div>



    <div className='m-4'>
      <div className='flex flex-row text-center'>
      <p className='text-black text-2xl'>Similar images</p>
      <p className='text-lg pl-6 pt-1 flex flex-row text-purple-600'>View All <IoIosArrowForward className="mt-1 ml-2"/></p>
      </div>
      <div className='flex flex-wrap p-4 object-contain'>
       <Image src={img1}  alt="Picture of the author" className='ml-8 w-52 h-64 mt-2'/>
       <Image src={img2} alt="Picture of the author" className='ml-8 w-64 h-64 mt-2'/>
       <Image src={img3} alt="Picture of the author" className='ml-8 w-52 h-64 mt-2'/>
       <Image src={img5} alt="Picture of the author" className='ml-8 w-52 h-64 mt-2'/>
       <Image src={img4} alt="Picture of the author" className='ml-8 w-52 h-64 mt-2'/>
       <Image src={img5} alt="Picture of the author" className='ml-8 mt-2 w-52 h-64'/>
       <Image src={img1}  alt="Picture of the author" className='ml-8 w-52 h-64 mt-2'/>
       <Image src={img2} alt="Picture of the author" className='ml-8 w-64 h-64 mt-2'/>
       <Image src={img3} alt="Picture of the author" className='ml-8 w-52 h-64 mt-2'/>
       <Image src={img5} alt="Picture of the author" className='ml-8 w-52 h-64 mt-2'/>
      </div>
      <div>
      <div className="m-8 flex flex-wrap justify-center">
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Peach</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Strawberry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Berry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Berry Fruit</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Apricot</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Cherry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Plum</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Peach</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Strawberry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Berry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Berry Fruit</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Apricot</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Cherry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Plum</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Strawberry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Berry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Berry Fruit</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Apricot</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Cherry</button>
      <button className='border-solid border-2 border-purple-600 rounded-md pl-5 pr-5 pt-2 pb-2 text-purple-600  flex mr-2 mt-2' >Plum</button>
      </div>
      </div>
    </div>
    </>
  )
}
