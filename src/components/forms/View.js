import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import "./View.css";

const View = () => {
const [products, setProducts] = useState([]);
const productService = new ProductService();

useEffect(() => {
productService.getProductsSmall().then((data) => setProducts(data));
}, []);

const header = (
<div className="table-header">
    <h1>Employees List</h1>
    {/* <Button icon="pi pi-refresh" /> */}
</div>
);
// will show the count of total employees
const footer = `In total there are ${
products ? products.length : 0
} products.`;

//Styling the rows
const rowClass = (data) => {
return {
    // "row-check": data.category === "Accessories",
    "row-check": data.category !== "x",
};
};
return (
<div className="datatable-templating-demo">
    <div className="card">
    <DataTable
        value={products}
        header={header}
        showGridlines
        footer={footer}
        rowClassName={rowClass}
    >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
        <Column field="id" header="ID"></Column>
    </DataTable>
    </div>
</div>
);
};

export default View;