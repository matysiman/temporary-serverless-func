const result = document.querySelector('.result');


const fetchData = async () => {
    try {
     const {data} = await axios.get ('/api/1-hello')
     result.textContent = data;
     result.innerHTML = '<h2>successדדדדדדדדדד</h2>'
    } catch (error) {
        result.textContent = "Error: " + error.response.data;
    }
}

fetchData();
