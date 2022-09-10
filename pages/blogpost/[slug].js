import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  <style jsx>
    {`
      .h1 {
        text-align: center;
        backgroung-color: black;
      }
    `}
  </style>;
  const route = useRouter();
  const { slug } = route.query;
  return (
    <div>
      <h1 className="h1">{slug}</h1>
      <hr />
      <p>{route.query.data}</p>
    </div>
  );
};

export default Slug;
