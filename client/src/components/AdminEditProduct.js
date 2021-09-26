import React from "react";

export default function AdminEditProduct({ match }) {
  const productId = match.params.productId;

  return <div>{console.log(productId)}</div>;
}
