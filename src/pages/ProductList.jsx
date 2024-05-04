import React from 'react'
import productData from '../assets/product-list.json';
import { FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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

export const ProductList = () => {

    let pdfList =
      {"coffee": CoffeePDF, "apparel": ApparelPDF, "diamond": DiamondPDF,"stone": StonePDF,"gold": GoldPDF,"handicraft": HandicraftPDF,"tea": TeaPDF,
      "textile": TextilePDF,"oils": OilsPDF,"herbs": HerbsPDF,"ayurvedic": AyurvedicPDF}
  
  return (
    <div className="items-center w-full">
       <div className="flex items-center justify-center w-full h-24 dark:border-gray-700 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">

    <div className="text-center text-2xl font-bold">Our Products</div>
</div>
    <div className="w-full  dark:bg-gray-800"> 


    <div>
                <div className="sm:px-6 w-full">
                    
                    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                        <div className="mt-7 overflow-x-auto">
                            <table className="w-full whitespace-nowrap">
                                <tbody>


                                    {productData.map(m=>(
       <>
       <tr className="h-16 border border-gray-200 rounded">
                                       
                                       <td >
                                       <Link to={`${m.name}`}>
                                           <div className="flex items-center pl-5">
                                               <p className="text-base font-medium leading-none text-blue-700 mr-2">{m.title}</p>
                                               
                                           </div>
                                           </Link>
                                       </td>
                                       <td >
                                       <a href={`${pdfList[m.name]}`} target="_blank"
                    rel="noreferrer"><FaFilePdf size={20} color='#FF0000'/></a>
                                       </td>
                                       
                                   </tr>
                                   <tr className="h-3" />
       </>
      ))}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

     </div>
    </div>
  )
}
