import React from "react"
import { Card, Image } from "semantic-ui-react"

const ProductCard = (p) => {
  let pictures = [
  {category: "Kitchen", url: "https://images.squarespace-cdn.com/content/v1/59413b21f7e0ab31c3723862/1544818999101-1NVUXEKKHTX2VLGJVXN1/Amazon-Eco-Friendly-Home-Kitchen-Gadgets.jpg?format=500w"},
  {category: "Home", url: "https://media1.popsugar-assets.com/files/thumbor/W9q5i6rmI6SJc-u2Q84Oaf42vis/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/08/18/716/n/1922794/00f67829611d31385659e6.95533320_/i/best-newly-launched-home-products-from-amazon-august.jpg"},
  {category: "Pets", url: "https://i.etsystatic.com/11272785/r/il/76744e/2437898183/il_1588xN.2437898183_aw46.jpg"},
  {category: "Jewelry", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPB_66s_EtO420foUUE7x2suOvXF7cb7E2jw&usqp=CAU"},
  {category: "Clothes", url: "https://assets.weforum.org/article/image/YlqprZMVrDcJUXbdjc5rAP6uqoO_YT1xZNby3HjH_KM.jpg"},
  {category: "Outdoors", url: "https://parksandrec.wpengine.com/wp-content/uploads/2018/04/926586802.jpg"},
]

const getPicture = (p) => {
  if(p.category === "Kitchen") {return(pictures[0].url)}
  if(p.category === "Home") {return(pictures[1].url)}
  if(p.category === "Pets") {return(pictures[2].url)}
  if(p.category === "Jewelry") {return(pictures[3].url)}
  if(p.category === "Clothes") {return(pictures[4].url)}
  if(p.category === "Outdoors") {return(pictures[5].url)}
}

return (
  <Card>
    <Image 
    src={getPicture(p)}
    wrapped
    ui={false}
    />
    <Card.Content>
      <Card.Header>{p.description}</Card.Header>
      <Card.Meta>${p.price}</Card.Meta>
    </Card.Content>
  </Card>
)
};

export default ProductCard