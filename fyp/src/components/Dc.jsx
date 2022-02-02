import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import download from "./images/download.jpg";
import "./dc.css";
import { useHistory } from "react-router-dom";
const Dc = () => {
/*  let history = useHistory();
  function handleClick() {
    history.push("/signin");
  }*/
  return (
      <>
    <div className='container'>
      
        <img src={download} alt="Italian Trulli"  />

      
        </div>
   
  
<div className="working">
  <h1> HOW IT WORKS</h1>
</div>


  <div className="how-works">

        <div className="left-works">
        <img src={download} alt="Italian Trulli" className="l-w"   />


        </div>

        <div className="right-works">
    <h2 className="choose">  <h1>1</h1>  CHOOSE FROM OUR 
        <br/> LIST OF SPECALISTS</h2>

        </div>
  </div>





  <div className="how-w">

<div className="left-w">
<h2 className="c">  <h1 style={{textAlign:'center'}}>2</h1>  CHOOSE FROM OUR 
<br/> LIST OF SPECALISTS</h2>

</div>

<div className="right-w">


<img src={download} alt="Italian Trulli" className="i"   />


</div>
</div>




<div className="how-works">

<div className="left-works">
<img src={download} alt="Italian Trulli" className="l-w"   />


</div>

<div className="right-works">
<h2 className="choose"> <h1>3</h1>   CHOOSE FROM OUR 
<br/> LIST OF SPECALISTS</h2>

</div>
</div>


<div className="working">
  <h1> OUR DOCTORS</h1>
</div>
<div className='setting-appointment'>

<div className="left-appointment">
 
<img src={download} alt="Italian Trulli" className="l-a"   />


 
    <div className="doctor-name">
    <h2 style={{color:'rgb(20,72,156)'}}> DR. ALI</h2>
    <p>MBBS</p>
    <p>General Physician</p>
    <h2 style={{color:'rgb(20,72,156)'}}>RS. 1000</h2>

    <div className="appoint-doctor"> 
<Button variant='contained' color='primary'> BOOK APPOINTMENT </Button>
</div>
  


</div>


</div>

<div className="right-appointment">

<img src={download} alt="Italian Trulli" className="l-a"   />


<div className="doctor-name">
    <h2 style={{color:'rgb(20,72,156)'}}> DR. HAIDER ALI</h2>
    <p>MBBS</p>
    <p>General Physician</p>
    <h2 style={{color:'rgb(20,72,156)'}}>RS. 1000</h2>

    <div className="appoint-doctor"> 
<Button variant='contained' color='primary'> BOOK APPOINTMENT </Button>
</div>


</div>

</div>
</div>


</>


































   /* <div class="dc">
     <button type="button" onClick={handleClick} />

      <h2>Doctors Consultancy</h2>
      <div class="aid">
        <h2> CONSULT NOW</h2>
      </div>

      <div class="p">
        <img src={download} alt="Italian Trulli" height={150} width={190} />
        <br />

        <br />

        <img src={download} alt="Italian Trulli" height={150} width={190} />
        <br />

        <br />
      </div>

      <br />
      <br />
      <br />

      <div class="work">
        <h2>HOW IT WORKS</h2>
      </div>
      <br />
      <br />
      <div class="how">
        <img
          id="i"
          src={download}
          alt="Italian Trulli"
          height={150}
          width={190}
        />
        <div class="h">
          <h2>
            {" "}
            CHOOSE FROM OUR
            <br /> LIST OF SPECALISTS
          </h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div class="how">
        <h2>
          {" "}
          PICK FROM OUR
          <br /> LIST OF VERIFIED DOCTORS
        </h2>
        <div class="h">
          <img
            id="i"
            src={download}
            alt="Italian Trulli"
            height={150}
            width={190}
          />
        </div>
      </div>
      <br />
      <br />
      <br />

      <div class="how">
        <img
          id="i"
          src={download}
          alt="Italian Trulli"
          height={150}
          width={190}
        />
        <div class="h">
          <br />
          <br />
          <br />

          <h2>
            {" "}
            BEGIN YOUR
            <br /> CONSULTATION
          </h2>
        </div>
      </div>

      <br />
      <br />
      <br />

      <h2 id="t"> SERVICES WE PROVIDE</h2>
      <div class="usman">
        <img
          id="i"
          src={download}
          alt="Italian Trulli"
          height={150}
          width={190}
        />
        <img
          id="i"
          src={download}
          alt="Italian Trulli"
          height={150}
          width={190}
        />
        <img
          id="i"
          src={download}
          alt="Italian Trulli"
          height={150}
          width={190}
        />
        <img
          id="i"
          src={download}
          alt="Italian Trulli"
          height={150}
          width={190}
        />
      </div>

      <br />
      <br />
      <br />
      <div class="parent">
        <img src={download} alt="Italian Trulli" height={150} width={190} />

        <div class="child">
          <img src={download} alt="Italian Trulli" height={150} width={190} />
          <br />
        </div>
      </div>
    </div>*/
  );
};

export default Dc;
