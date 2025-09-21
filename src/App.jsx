
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())

function App() {

  return (
    <>
      
      <h1 style={{textAlign:'center'}}>React World On The Go</h1>
      <Suspense fallback={<h1 style={{color: 'green'}}>Countries are loading....</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
     
    </>
  )
}

export default App
