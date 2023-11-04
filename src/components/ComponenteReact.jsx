import {useState} from 'react'

export default function ComponenteReact() {
    const [cliente , setCliente] = useState('Renier');
    console.log(cliente);
  return (
    <div>ComponenteReact : {cliente}</div>
  )
}
