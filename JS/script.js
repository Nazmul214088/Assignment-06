
// Side bar 
fetch('https://openapi.programming-hero.com/api/categories')
.then(res => res.json())
.then(data=>allCategories(data.categories));
const allCategories = (categories) => {
    const parent = document.getElementById('sideBarContainer');
    for(category of categories){
        const divSideBar = document.createElement('div');
        divSideBar.innerHTML = `
        <button id="btn_${category.id}" onclick ="loadDataSpecificTree(${category.id})" class="text-center p-2 font-medium text-[#1F2937] transition-all duration-1000 w-full rounded-md hover:text-white hover:bg-[#15803D]">${category.category_name}</button>
        `;
        parent.appendChild(divSideBar);
    }
}

// Load all tree card
fetch("https://openapi.programming-hero.com/api/plants")
.then(res => res.json())
.then(data => showAllPlants(data.plants));
// Show all tree card
const showAllPlants = (allPlants) =>{
    const parent = document.getElementById('allPlantContainer');
    parent.innerHTML = "";
    for(plant of allPlants){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" bg-white rounded-lg h-full grid content-between">
            <div>
                <div class="w-full h-[250px]">
                    <img class="w-full h-full rounded-t-xl mb-3 object-cover"  src="${plant.image}">
                </div>
                <div class = " p-3">
                    <h2 onclick="detailsPlantInfo(${plant.id})" class="text-[#18181B] text-[14px] cursor-pointer font-semibold mb-2 mt-3">${plant.name}</h2>
                    <p class=" text-[12px] text-[#71717A] mb-2">${plant.description}</p>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class=" font-geist text-[#15803D] text-[14px] font-medium bg-[#DCFCE7] rounded-full px-3 py-1 border border-[#05692a]">${plant.category}</h3>
                        <h3 class=" font-semibold text-[14px] p-1">৳${plant.price}</h3>
                    </div>
                </div>
            </div>
                <div>
                    <button onclick = "btn_add_to_cart(${plant.id})" class="btn bg-[#15803D] font-medium text-white rounded-full mb-3 ml-[15px] w-[calc(100%-30px)]">Add to Cart</button>
                </div>
        </div>
        `;
        div.classList.add('shadow-[0_0_10px_#14532D]', 'rounded-3xl', 'h-full');
        parent.appendChild(div);
    }
}

const detailsPlantInfo = (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetailsPlantInfo(data.plants));
}

// modal function start 
const showDetailsPlantInfo = (plant) =>{
    document.getElementById('detailsModal').showModal();
    const parent = document.getElementById('detailsContainer');
    const div = document.createElement('div');
    parent.innerHTML = "";
    div.innerHTML = `
        <div>
            <h1 class=" text-3xl font-bold">${plant.name}</h1>
            <div class="w-full h-[250px]">
                <img class="w-full h-full rounded-xl mb-3 object-cover"  src="${plant.image}">
            </div>
            <h2><span class=" font-bold">Category: </span>${plant.category}</h2>
            <p><span class="font-bold">Price: </span> ৳${plant.price}</p>
            <p><span class="font-bold">Description: </span>${plant.description}</p>
        </div>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
        </div>
    `;
    parent.appendChild(div);
}

// show card click specific category 
const loadDataSpecificTree = (id) => {
    showSpinner(true);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res=> res.json())
    .then(data => showDataSpecificTree(data.plants));
    const sideBarContainer = document.querySelectorAll('#sideBarContainer button');
    for(let card of sideBarContainer){
        card.classList.remove('active');
    }
    document.getElementById(`btn_${id}`).classList.add('active')
}
const showDataSpecificTree = (allPlants) => {
    const parent = document.getElementById('allPlantContainer');
    parent.innerHTML = "";
    for(plant of allPlants){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class=" bg-white rounded-lg h-full grid content-between">
            <div>
                <div class="w-full h-[250px]">
                    <img class=" rounded-t-lg w-full h-full mb-3 object-cover"  src="${plant.image}">
                </div>
                <div class=" p-3">
                    <h2 onclick="detailsPlantInfo(${plant.id})" class="text-[#18181B] text-[14px] font-semibold px-3 mb-2 mt-3">${plant.name}</h2>
                    <p class=" text-[12px] text-[#71717A] mb-2">${plant.description}</p>
                    <div class="flex justify-between items-center mb-4">
                        <h3 class=" font-geist text-[#15803D] text-[14px] font-medium bg-[#DCFCE7] rounded-full px-3 py-1 border border-[#05692a]">${plant.category}</h3>
                        <h3 class=" font-semibold text-[14px] p-1">৳<span id="price_${plant.id}">${plant.price}</span></h3>
                    </div>
                </div>
            </div>
            <div>
                <button onclick = "btn_add_to_cart(${plant.id})" class="btn bg-[#15803D] px-3 font-medium text-white rounded-full mb-3 ml-[15px] w-[calc(100%-30px)]">Add to Cart</button>
            </div>
        </div>
        `;
        div.classList.add('shadow-[0_0_10px_#14532D]', 'rounded-3xl', 'h-full');
        parent.appendChild(div);
    }
    showSpinner(false);
}


const btn_add_to_cart = (id)=>{
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => show_add_to_cart_data(data.plants));
}
const show_add_to_cart_data=(data)=>{
    const cartParent = document.getElementById('cartParent');
    alert(`${data.name} tree has been added to the card.`);

    const div = document.createElement('div');
    div.innerHTML = `
        <div>
            <h1>${data.name}</h1>
            <p>৳<span id="price_${data.id}">${data.price}</span> x 1</p>
        </div>
        <div onclick="x_btn(${data.id})" class= " text-red-600">
            <i class="fa-solid fa-x"></i>
        </div>
    `;
    div.classList.add('flex', 'justify-between', 'items-center', 'mb-3','p-2', 'bg-white', 'w-full');
    div.id = `parent_id_${data.id}`;
    cartParent.appendChild(div);

    let total_cost = parseInt(document.getElementById('total').innerText);
    let current_price = parseInt(`${data.price}`);
    total_cost = total_cost + current_price;
    document.getElementById('total').innerText = total_cost;
}

const x_btn = (id) =>{
    let total_cost = parseInt(document.getElementById('total').innerText);
    let current_price = parseInt(document.getElementById(`price_${id}`).innerHTML);
    total_cost = total_cost - current_price;
    document.getElementById('total').innerText = total_cost;
    document.getElementById(`parent_id_${id}`).remove();
}

// Spinner function 

const showSpinner = (status) => {
    if(status == true){
        document.getElementById('spinnerContainer').classList.remove('hidden');
        document.getElementById('allPlantContainer').classList.add('hidden');
    }
    else{
        document.getElementById('allPlantContainer').classList.remove('hidden');
        document.getElementById('spinnerContainer').classList.add('hidden')
    }
}
