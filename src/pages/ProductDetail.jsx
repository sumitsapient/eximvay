import React from 'react'
import Coffee from '../assets/coffee.jpg';
import Apparel from '../assets/apparel.jpg';
import Diamond from '../assets/diamond.jpg';
import Stone from '../assets/stone.jpg';
import Gold from '../assets/gold.jpg';
import Handicraft from '../assets/handicraft.jpg';
import Tea from '../assets/tea.jpg';
import Textile from '../assets/textile.jpg';
import Oils from '../assets/oils.jpg';
import Herbs from '../assets/herbs.jpg';
import Ayurvedic from '../assets/ayurvedic.jpg';
import CoffeePDF from '../assets/pdf/coffee.pdf';
import ApparelPDF from '../assets/pdf/apparel.pdf';
import DiamondPDF from '../assets/pdf/diamond.pdf';
import StonePDF from '../assets/pdf/stone.pdf';
import GoldPDF from '../assets/pdf/gold.pdf';
import HandicraftPDF from '../assets/pdf/handicraft.pdf';
import TeaPDF from '../assets/pdf/tea.pdf';
import TextilePDF from '../assets/pdf/textile.pdf';
import OilsPDF from '../assets/pdf/oils.pdf';
import HerbsPDF from '../assets/pdf/herbs.pdf';
import AyurvedicPDF from '../assets/pdf/ayurvedic.pdf';
import { useParams } from 'react-router-dom';
import productData from '../assets/product-list.json';
import { FaArrowLeft, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const ProductDetail = () => {
  const param = useParams();
  const {productId} = param;
  const product = productData.find(m=> m.name === productId);
  let imageName =
      {"coffee": Coffee, "apparel": Apparel, "diamond": Diamond,"stone": Stone,"gold": Gold,"handicraft": Handicraft,"tea": Tea,
      "textile": Textile,"oils": Oils,"herbs": Herbs,"ayurvedic": Ayurvedic}
  let pdfList =
      {"coffee": CoffeePDF, "apparel": ApparelPDF, "diamond": DiamondPDF,"stone": StonePDF,"gold": GoldPDF,"handicraft": HandicraftPDF,"tea": TeaPDF,
      "textile": TextilePDF,"oils": OilsPDF,"herbs": HerbsPDF,"ayurvedic": AyurvedicPDF}
  
   let currentImg = imageName[product.media];
   let currentPDF = pdfList[product.media];

  return (
    <div className="items-center w-full">

       <div className="flex items-center justify-center w-full h-24 dark:border-gray-700 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">

        <div className="text-center text-2xl font-bold">{product.title}</div>
        
    </div>
    <div className="flex justify-between pl-6 pr-6 pt-6">
    <Link to="/product" className="text-[#f58b33] hover:text-gray-600 font-semibold text-sm flex items-center">
            <FaArrowLeft className="ml-1"/>&nbsp; Return
            </Link>
            <a href={`${currentPDF}`} target="_blank" rel="noreferrer" className="text-[#f58b33] hover:text-gray-600 font-semibold text-sm flex items-center">
            Download &nbsp; <FaFilePdf  className="mr-1" size={20} color='#FF0000'/>
                </a>
            </div>
    <div className="flex flex-col lg:flex-row pb-6 pt-6  w-full items-start lg:items-center rounded bg-white shadow">

    <div className="w-full lg:w-1/3 h-24 dark:border-gray-700 lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100 bg-[]"  style={{ backgroundImage: `url(${currentImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

</div>

               <div className="w-full lg:w-2/3 dark:bg-gray-800" >
<p className="text-gray-600 font-normal text-wrap pl-6 pr-6 pt-6">{product.summary}</p>

               </div>
            
            </div>
    </div>

  )
}
