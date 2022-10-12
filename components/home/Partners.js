import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="container">
      <h1>Trusted Partner</h1>
      <Image width={2800} height={400} src="/partners.png" alt="" />
    </div>
  );
};

export default Partners;
