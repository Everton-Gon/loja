function connectApi(){
    fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>ListarProdutos(json))
           
            
}

//NAVBAR
const elemsDropd = document.querySelectorAll(".dropdown-trigger")
const instancesDropd = M.Dropdown.init(elemsDropd, {
  coverTrigger:false
})

function ListarProdutos(json){
    const listaProdutos = document.getElementById("products-list")
    json.forEach(item => {
        const divItem = document.createElement("div")
        divItem.innerHTML = `
        <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${item.image}">
        </div>

        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
          <p>${item.price}</p>
        </div>

        <div class="card-action">
        <a class="waves-effect waves-light btn blue darken-3"><i class="material-icons left">add_shopping_cart</i>Add to cart</a>
        </div>

        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
          <p>${item.description}</p>
        </div>
        </div>
        `
        // p_nome = document.createElement('p')
        // p_nome.innerHTML = `${item.title}`
        listaProdutos.appendChild(divItem)
    });

    
}

connectApi()