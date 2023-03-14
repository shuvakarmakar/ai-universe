const loadAIUniverse = () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAIUniverses(data.data))
    toggleSpinner(true);
}

// For first 6 Cards
const displayAIUniverses = aiuniversename => {
    const aiUniverseContainer = document.getElementById('ai-universe-container');
    aiuniversename.tools.innerHTML = '';
    aiuniversename.tools = aiuniversename.tools.slice(0, 6);
    aiuniversename.tools.forEach(aiuniverse =>{
         const aiUniverseDiv = document.createElement('div');
         aiUniverseDiv.classList.add('col');
         aiUniverseDiv.innerHTML = `
            <div class="card h-100 p-3">
            <img src="${aiuniverse.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="fw-bold">Features</h5>
            <ol>
                <li class="${aiuniverse.features[0] === undefined ? 'd-none' : ''}">${aiuniverse.features[0]}</li>
                <li class="${aiuniverse.features[1] === undefined ? 'd-none' : ''}">${aiuniverse.features[1]}</li>
                <li class="${aiuniverse.features[2] === undefined ? 'd-none' : ''}">${aiuniverse.features[2]}</li>
                <li class="${aiuniverse.features[3] === undefined ? 'd-none' : ''}">${aiuniverse.features[3]}</li>
            </ol>
            </div>
            <hr>
            <div class="d-flex justify-content-between align-items-center px-3">
            <div>
                <p class= "fw-bold">${aiuniverse.name}</p>
                <p><img src="assets/Frame.png" alt=""> ${aiuniverse.published_in}</p>
            </div> 
            <div>
             <img src="assets/Arrow-Icon.png" onclick="loadSingleAIUniverse('${aiuniverse.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 
            </div> 
            </div>   

        </div>
         `;

         aiUniverseContainer.appendChild(aiUniverseDiv)
    })
    toggleSpinner(false)
}

// For Next 6 Cards
const displayAIUniverses2 = aiuniversename => {
    const aiUniverseContainer = document.getElementById('ai-universe-container');
    aiuniversename.tools = aiuniversename.tools.slice(6, 12);
    // aiuniversename.tools.innerHTML = '';
    aiuniversename.tools.forEach(aiuniverse =>{
         const aiUniverseDiv = document.createElement('div');
         aiUniverseDiv.classList.add('col');
         aiUniverseDiv.innerHTML = `
            <div class="card h-100 p-3">
            <img src="${aiuniverse.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="fw-bold">Features</h5>
            <ol>
                <li class="${aiuniverse.features[0] === undefined ? 'd-none' : ''}">${aiuniverse.features[0]}</li>
                <li class="${aiuniverse.features[1] === undefined ? 'd-none' : ''}">${aiuniverse.features[1]}</li>
                <li class="${aiuniverse.features[2] === undefined ? 'd-none' : ''}">${aiuniverse.features[2]}</li>
                <li class="${aiuniverse.features[3] === undefined ? 'd-none' : ''}">${aiuniverse.features[3]}</li>
            </ol>
            </div>
            <hr>
            <div class="d-flex justify-content-between align-items-center px-3">
            <div>
                <p class= "fw-bold">${aiuniverse.name}</p>
                <p><img src="assets/Frame.png" alt=""> ${aiuniverse.published_in}</p>
            </div> 
            <div>
            <img src="assets/Arrow-Icon.png" onclick="loadSingleAIUniverse('${aiuniverse.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 
            </div> 
            </div>   

        </div>
         `;

         aiUniverseContainer.appendChild(aiUniverseDiv)
    })
    toggleSpinner(false)
}

// For Showing ALL 12 Cards
const loadAIUniverseFull = () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAIUniverses2(data.data))
}


// See More button Work
document.getElementById('btn-see-more').addEventListener('click', function(){
    toggleSpinner(true);
    loadAIUniverseFull();
    document.getElementById("btn-see-more").style.display = "none";
})


// For Single Data Details

const loadSingleAIUniverse = (id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAIUniverseElement(data.data))
}


// Display Data For Modal and 2 card added for modal
const displayAIUniverseElement = aiuniverse =>{
    console.log(aiuniverse);
    const firstCardModalDetails = document.getElementById('universedetails1');
    firstCardModalDetails.innerHTML = `
            <div class="card-body bg-success-subtle ">
            <h5 class="card-title">${aiuniverse.description}</h5>
            <div class="d-flex flex-row flex-lg-row flex-md-row gap-2 my-5">
                <div class="bg-secondary-subtle container rounded w-25">
                    <p class="p-1 card-text text-success fw-bold text-center">${aiuniverse.pricing === null ? 'Free of Cost': aiuniverse.pricing[0].price} Basic</p>
                </div>
                <div class="bg-secondary-subtle container rounded w-25">
                    <p class="p-1 card-text text-warning fw-bold text-center">${aiuniverse.pricing === null ? 'Free of Cost': aiuniverse.pricing[1].price} Pro</p>
                </div>
                <div class="bg-secondary-subtle container rounded w-25">
                    <p class="p-1 card-text text-danger fw-bold text-center">${aiuniverse.pricing === null ? 'Free of Cost': aiuniverse.pricing[2].price} Enterprise</p>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="p-2">
                    <h5 class="fw-bold">Features</h5>
                      <ul>
                      <li class="${aiuniverse.features[1].feature_name === undefined || aiuniverse.features === null ? 'd-none' : ''}">${aiuniverse.features[1].feature_name}</li>
                      <li class="${aiuniverse.features[2].feature_name === undefined || aiuniverse.features === null ? 'd-none' : ''}">${aiuniverse.features[2].feature_name}</li>
                      <li class="${aiuniverse.features[3].feature_name === undefined || aiuniverse.features === null ? 'd-none' : ''}">${aiuniverse.features[3].feature_name}</li>
                    </ul> 
                </div>

                <div class="p-2">
                    <h5 class="fw-bold">Integrations</h5>
                    <ul>
                    <li>${aiuniverse.integrations === null || aiuniverse.integrations[0] ===undefined ? 'No data found' : aiuniverse.integrations[0]}</li>
                    <li>${aiuniverse.integrations === null || aiuniverse.integrations[1] ===undefined ? 'No data found' : aiuniverse.integrations[1]}</li>
                    <li>${aiuniverse.integrations === null || aiuniverse.integrations[2] ===undefined ? 'No data found' : aiuniverse.integrations[2]}</li>
                    </ul> 
                </div>
            </div>
            </div>
    `
    const secondCardModalDetails = document.getElementById('universedetails2');
    secondCardModalDetails.innerHTML = `
                <img src="${aiuniverse.image_link[0]}" class="card-img-top p-3 rounded-2" alt="...">
                <button class="${aiuniverse.accuracy.score === null ? 'd-none' : ''} rounded bg-danger text-white" style="width: 6rem; position:absolute; left: 380px; top:20px">${aiuniverse.accuracy.score*100} % accuracy</button>
                <div class="card-body">
                <h5 class="card-title text-center fw-bold">${aiuniverse.input_output_examples === null ? 'Can you give any example?' : aiuniverse.input_output_examples[0].input}</h5>
                <p class="card-text text-center fw-normal p-3">${aiuniverse.input_output_examples === null ?'No, Not Yet!! Take a Break' : aiuniverse.input_output_examples[0].output}</p>                
                </div>
    `
}

// Toggle Spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


loadAIUniverse();