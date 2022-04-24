import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);
  let compomentMounted = true;
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (compomentMounted) {
        /*setData(await response.clone().json());
        setFilter(await response.json());*/
        const data = await response.json();
        setData(data);
        setFilter(data);
        setLoading(false);
        console.log(filter);
      }
      return () => {
        compomentMounted = false;
      }
    }
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }


  const filterProduct = (cat) => {
    const updateList = data.filter(item => item.category === cat);
    setFilter(updateList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
        </div>
        {
          filter.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div class="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} class="card-img-top" alt={product.title} height={250} />
                    <div class="card-body">
                      <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                      <p class="card-text lead fw-bold">
                        {`$${product.price}`}
                      </p>
                      <Link to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </>

    )
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>
              {
                isAuthenticated && (
                  <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                )
              }Latest products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}
export default Products;