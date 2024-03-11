import { useContext, useState } from "react";
import MainContext from "../../context/QueryContext";
import { queryDataAlt as queryData, queryData3 } from "../../assets/data/data";
import { queryData2 } from "../../assets/data/data";
import ToastProvider from "./Toast";

const EditorPanel = () => {
  const { query, setQueryHistory, queryHistory, setQuery } = useContext(MainContext);
  const [openToast, setOpenToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const runQuery = () => {
    if (query.trim() === "") {
      setErrorMessage((message) => ('Oops, that was a Null Query. Please type another query, or select from the ones previously saved.'));
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 4000);
      return;
    }
    if (query === "SELECT * FROM categories;" || query==="select * from categories;"|| query==="Select * from categories;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData,
      }));
    }
    else if (query === "SELECT productID, productName, supplierID, categoryID, quantityPerUnit, unitPrice, unitsInStock, unitsOnOrder, reorderLevel, discontinued FROM products;"|| query === "select productID, productName, supplierID, categoryID, quantityPerUnit, unitPrice, unitsInStock, unitsOnOrder, reorderLevel, discontinued from products;" || query === "select productID,productName,supplierID,categoryID,quantityPerUnit,unitPrice,unitsInStock,unitsOnOrder,reorderLevel,discontinued from products;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData2,
      }));
    }
    else if (query === "SELECT orderID, productID, unitPrice, quantity FROM order_details;"|| query === "select orderID, productID, unitPrice, quantity from order_details;"||query === "Select orderID, productID, unitPrice, quantity from order_details;") {
      setQueryHistory((prev) => ({
        ...prev,
        outputData: queryData3,
      }));
    }
    else {
      setErrorMessage((message) => ('Oops, that was a Wrong Query. Please type another query, or select from the ones previously saved.'));
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 4000);
    }
    if (queryHistory.history[queryHistory.history.length - 1] !== query) {
      setQueryHistory((prev) => ({
        ...prev,
        history: [...prev.history, query],
      }));
    }
  };

  const saveQuery = () => {
    if (query.trim() === "") {
      setErrorMessage((message) => ('Oops, that was a Null Query. Please type another query, or select from the ones previously saved.'));
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 4000);
      return;
    }

    setQueryHistory((prev) => ({
      ...prev,
      saved: [...prev.saved, query],
    }));
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <>
    {openToast && <ToastProvider errorMessage={errorMessage} setCloseToast={setOpenToast} />}
    <div className='flex justify-evenly md:flex-col md:justify-normal'>
      <div onClick={() => runQuery()} className="relative inline-block px-4 py-2 my-2 font-medium group cursor-pointer">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-600 group-hover:-translate-x-0 group-hover:-translate-y-0" style={{borderRadius:'10px'}}></span>
        <span className="absolute inset-0 w-full h-full bg-gray-50 border-2 border-gray-700 group-hover:bg-blue-600 "style={{borderRadius:'10px'}}></span>
        <span className="relative text-gray-800 group-hover:text-white">Run</span>
      </div>
      <div onClick={() => saveQuery()} className="relative inline-block px-4 py-2 my-2 font-medium group cursor-pointer">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-600 group-hover:-translate-x-0 group-hover:-translate-y-0"style={{borderRadius:'10px'}}></span>
        <span className="absolute inset-0 w-full h-full bg-gray-50 border-2 border-gray-700 group-hover:bg-green-600" style={{borderRadius:'10px'}}></span>
        <span className="relative text-gray-800 group-hover:text-white">Save</span>
      </div>
      <div onClick={() => clearQuery()} className="relative inline-block px-4 py-2 my-2 font-medium group cursor-pointer">
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-600 group-hover:-translate-x-0 group-hover:-translate-y-0"style={{borderRadius:'10px'}}></span>
        <span className="absolute inset-0 w-full h-full bg-gray-50 border-2 border-gray-700 group-hover:bg-red-600"style={{borderRadius:'10px'}}></span>
        <span className="relative text-gray-800 group-hover:text-white">Clear</span>
      </div>
    </div>
    </>
  );
};

export default EditorPanel;
