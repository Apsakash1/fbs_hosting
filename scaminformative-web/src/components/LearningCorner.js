import React from "react";
import Banner1 from "../images/Banner1.png";
import Banner2 from "../images/Banner 2.png";
import Banner3 from "../images/Banner 3.png";
import "../components/Fonts.css";
import "../components/LearningCorner.css";
function LearningCorner(){
    return (
        <>
        <section className="bg-light">
<div className="container px-5 my-5">
<div className="text-center">
<h2 className="fw-bolder pt-4 ">Learning Corner</h2>
</div>
<div className="row mt-5">
<div className="col-sm-12 col-md-4 mb-5">
<div class="card">
  <img class="card-img-top" src={Banner1} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title roboto-black" style={{fontWeight:'bold'}}>Guard your gate! Essential safety tips</h4>
    <p class="card-text roboto-regular">The internet can be a fun and useful place, but watch out for sneaky tricks! This guide will show you easy ways to protect your stuff online.</p>
    <a href="#" class="btn btn-outline-success d-flex justify-content-center" style={{borderRadius:'5rem'}}>Read More</a>
  </div>
</div>

</div>
<div className="col-sm-12 col-md-4 mb-5">
<div class="card">
  <img class="card-img-top" src={Banner2} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title roboto-black" style={{fontWeight:'bold'}}>Don't Get Phished: Quick steps for Online Safety</h4>
    <p class="card-text roboto-regular ">To stay safe in the online world, it is important to follow safety practices which may help us in protecting ourselves and our family from scammers</p>
    <a href="#" class="btn btn-outline-success d-flex justify-content-center" style={{borderRadius:'5rem'}}>Read More</a>
  </div>
</div>

</div>
<div className="col-sm-12 col-md-4 mb-5">
<div class="card">
  <img class="card-img-top" src={Banner3} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title roboto-black" style={{fontWeight:'bold'}}>Shield Yourself From Scams</h4>
    <p class="card-text roboto-regular">This guide will show you what to do (and what not to do) to keep your hard-earned cash safe. Learn how to spot scams and avoid getting tricked online.</p>
    <a href="#" class="btn btn-outline-success d-flex justify-content-center" style={{borderRadius:'5rem'}}>Read More</a>
  </div>
</div>

</div>


</div>
</div>
        </section>
        </>
    );

}

export default LearningCorner;