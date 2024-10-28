import { products } from "../../data/products";

export default function Gallery(){
  return (
  <div className="gallery-items" style={{marginBottom: "1000px"}}>
    {products.map((item) => (
      <div key={item.id}>
        <div>{item.name}</div>
        <div>{item.description}</div>
      </div>
      ))}
  </div>
  );
}