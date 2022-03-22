import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Home from "./Home";
import "./category.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllcategory } from "../actions";
import { Modal, Button } from "bootstrap";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Category = (props) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const [show, setShow] = useState(false);
 
  const [categoryName,setCategoryName]=useState('');
  const [categoryDescription,setCategoryDescription]=useState('');
  const [categoryImage,setcategoryImage]=useState('');
  const [parentId,setParentId]=useState('');

  useEffect(() => {
    dispatch(getAllcategory());
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderCategories = (categories) => {
    let mycategories = [];
    for (let category of categories) {
      mycategories.push(
        <h3 key={category.name}>
          {category.name}

          {category.childern.length > 0 ? (
            <li className="sub">
              <h5> Subcategories</h5>
              {renderCategories(category.childern)}
            </li>
          ) : null}
        </h3>
      );
    }
    return mycategories;
  };

  const createCategoryList=(categories,options=[])=>{
    for ( let category of categories){
        options.push({ value:category.id, name:category.name})

        if(category.childern.length >0 )
        {
            createCategoryList(category.childern,options)
        }
    }
      return options

   }

   const handleCategoryimage=(e)=>{
     setcategoryImage(e.target.files[0])
   }

  let history = useHistory();
  const handleclick = () => {
    history.push("/buttonproduct");
  };
  return (
    <>
      <Home />
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Category</h1>
          <button type="submit" onClick={handleclick}>
                Add
          </button>
        </div>

        <h1>{renderCategories(category.categories)}
        </h1>

<form>
        <h1> Add Categories</h1>
        <div className="catergories">

        <input type='text' 
        placeholder="Category Name"
        value={categoryName}
        onChange={(e)=>{
          setCategoryName(e.target.value)
        }}    />
             


<br/>


<select className="form-control" 
value={parentId}
onChange={(e)=>{
      setParentId(e.target.value)
}}>


    <option>  Select Category    </option>
    {
createCategoryList(category.categories).map(option => 
    <option key={option.value} value={option.value}> {option.name} </option>)}

</select>
  <br/>
  <br/>
 <input type='file' 

 name="categoryimage"
 placeholder="choose file"
onChange={handleCategoryimage}
 />

</div>
</form>

      
      </Container>

   


    </>
  );
};

export default Category;
