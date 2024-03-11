import { useMemo, useState, lazy } from "react";
import "./Editor.css";
const SideBar = lazy(() => import("../editor-components/SideBar"));
const CodeMirror = lazy(() => import("../editor-components/CodeEditor"));
const Output = lazy(() => import("../editor-components/Output"));
import MainContext from "../../context/QueryContext";

function Editor() {
  const [query, setQuery] = useState();
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT productID, productName, supplierID, categoryID, quantityPerUnit, unitPrice, unitsInStock, unitsOnOrder, reorderLevel, discontinued FROM products;","SELECT * FROM categories;","SELECT orderID, productID, unitPrice, quantity FROM order_details;"],
    history: [],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  return (
    <div className='App-Editor'>
      <MainContext.Provider value={contextValue}>
        <div className='mb-4'>
          <div className='md:grid grid-cols-7'>
            <div className='h-full col-span-2'>
              <SideBar />
            </div>
            <div className='col-span-5 h-[85vh]'style={{boxShadow:'0 5px 15px 0 rgba(0 0 0 )', borderRadius:'13px', marginTop:'10px', background:'#fff'}}>
              <CodeMirror />
              <Output />
            </div>
          </div>
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Editor;
