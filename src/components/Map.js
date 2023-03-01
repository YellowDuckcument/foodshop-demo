/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function Map({...other}) {
  return (
    <div {...other}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18111.971883316673!2d106.70769496473666!3d10.80031808779644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293cd7d1fbc3%3A0xb465534af0ed1305!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gUjJT!5e0!3m2!1svi!2s!4v1677683037472!5m2!1svi!2s"
        width="100%"
        height="400px"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
