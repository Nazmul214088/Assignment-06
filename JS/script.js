
// Side bar 
fetch('https://openapi.programming-hero.com/api/categories')
.then(res => res.json())
.then(data=>allCategories(data.categories));
const allCategories = (categories) => {
    const parent = document.getElementById('sideBarContainer');
    for(category of categories){
        const divSideBar = document.createElement('div');
        divSideBar.innerHTML = `
        <button id="btn_${category.id}" onclick ="loadDataSpecificTree(${category.id})" class="text-left p-2 font-medium text-[#1F2937] transition-all duration-1000 w-full rounded-md hover:text-white hover:bg-[#15803D]">${category.category_name}</button>
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
        <div class=" bg-white p-4 rounded-lg h-full">
            <div class="w-full h-[310px]">
                <img class="w-full h-full rounded-xl mb-3 object-cover"  src="${plant.image}">
            </div>
            <h2 onclick="detailsPlantInfo(${plant.id})" class="btn text-[#18181B] text-[14px] font-semibold mb-2 mt-3">${plant.name}</h2>
            <p class=" text-[12px] text-[#71717A] mb-2">${plant.description}</p>
            <div class="flex justify-between items-center mb-4">
                <h3 class=" font-geist text-[#15803D] text-[14px] font-medium bg-[#DCFCE7] rounded-full px-3 py-1">${plant.category}</h3>
                <h3 class=" font-semibold text-[14px] p-1">৳${plant.price}</h3>
            </div>
            <button onclick = "btn_add_to_cart(${plant.id})" class="btn w-full bg-[#15803D] font-medium text-white rounded-full">Add to Cart</button>
        </div>
        `;
        parent.appendChild(div);
    }
}
 