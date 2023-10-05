import './App.css'
import { sampleProduct } from './data'

function App() {
  return (
    <div>
      <header>
        TS amazon
      </header>
      <main>
        <ul>
          {sampleProduct.map((product) => (
            <li key={product.slug}>
              <img src={product.image} alt={product.name} className='product-image'/>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
                
            </li>
          ))}
        </ul>
      </main>
      <footer>
        ALL right reserved
      </footer>
    </div>
  )
}

export default App
