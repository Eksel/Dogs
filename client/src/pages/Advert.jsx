import React from 'react'
// "name": "Suzi",
//                     "views": "180",
//                     "gender": "suka",
//                     "breed": "Berneński pies pasterski",
//                     "age": "7 tygodni",
//                     "weight": "14 kg",
//                     "image" : "" 

export default function Advert(props) {
  return (
    <>
      <div>Advert {props.dog.id}</div>
      <div>Advert {props.dog.name}</div>
    </>
    
  )
}
