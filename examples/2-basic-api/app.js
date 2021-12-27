const result = document.querySelector('.result')

const fetchData = async () => {
    try {
     const {data} = await axios.get ('/api/2-basic-api')
     result.innerHTML = '<h2>success</h2>'
     const products = data.map((product) => {
        const {
            name,
            image: {url},
            price,
            id
        } = product;
        return `<article class="product">
        <img
          src="${url}"
          alt="utopia sofa"
        />
        <div class="info">
          <h5>${name}</h5>
          <h5 class="price">$${price} pr</h5>
        </div>
      </article>`
    
     }).join('');

     console.log(data);
     result.innerHTML = products;
    } catch (error) {
      //  result.textContent = "Error: " + error.response.data;
      result.innerHTML = '<h2> Error </h2>';
    }
}

fetchData();
