import React, { useEffect, useState } from "react";
import phonesService from "../services/phones";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    phonesService.detail(id).then((phone) => {
      console.log(phone);
      setPhone(phone);
    });
  }, [id]);

  return (
    <div class="card text-bg-primary mb-3">
      <div class="card-header">
        {phone.length > 0 ? phone[0].name : "Loading..."}
      </div>
      <div class="card-body">
        <h5 class="card-title">{phone.length > 0 ? phone[0].price : "Loading..."}€</h5>
        <p class="card-text">
        {phone.length > 0 ? phone[0].description : "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default Detail;
