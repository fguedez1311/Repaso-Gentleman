import { useEffect, useState } from 'react'


import './App.css'


function App() {
  const [data, setData] = useState([])
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState("")

  const fetchData=async ()=>{
    try {
        setLoading(true)
        const response=await fetch('https://api.example.com/data')
        if (!response.ok){
          throw new Error('Error al obtener los datos')
        }
        const jsconData=await response.json()
        setData(jsconData)
        
    } catch (err) {
        setError(err as string)
      
    }
    finally{
      setLoading(false)
    }
  }

  // Comunicarnos al endpoint-entidad externa al componente
  // Operaciones Async
  //Parámetros de entrada

  // Maneja el ciclo de vida de un componente
  useEffect(()=>{
    fetchData()
  },[])
  // useEffect(()=>{
  //   // 1. Se va ejecutar cuando se  monta el componente
  //   // 2. Cada vez que se modifique uno de los valores del state que está dentro del arreglo de dependencia

  //   return ()=>{

  //   }
  // },[])
  if (loading){
    return (
      <div>Cargando...</div>
    )
  }
  if (error){
    return (
        <div>UPS! Hay un error: {error}</div>
    )
  }
  return(
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
