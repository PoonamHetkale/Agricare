
// Sample pesticide data

const pesticides = [

{
name:"Chlorpyrifos",
usage:"Controls insects in rice crops",
crop:"Rice",
precaution:"Avoid spraying near water bodies"
},

{
name:"Imidacloprid",
usage:"Used for aphids and termites",
crop:"Wheat",
precaution:"Use protective gloves"
},

{
name:"Neem Oil",
usage:"Organic pest control",
crop:"Vegetables",
precaution:"Spray during evening"
},

{
name:"Cypermethrin",
usage:"Controls caterpillars",
crop:"Cotton",
precaution:"Do not inhale spray"
}

];


// Simple Virtual DOM rendering function

function renderPesticides(data){

const container = document.getElementById("pesticideContainer");

container.innerHTML="";

data.forEach(p=>{

const card = document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${p.name}</h3>

<p><b>Usage:</b> ${p.usage}</p>

<p><b>Crop:</b> ${p.crop}</p>

<p><b>Precaution:</b> ${p.precaution}</p>

`;

container.appendChild(card);

});

}


// Search Filter

function searchPesticide(){

const value=document.getElementById("search").value.toLowerCase();

const filtered=pesticides.filter(p=>

p.name.toLowerCase().includes(value) ||
p.crop.toLowerCase().includes(value)

);

renderPesticides(filtered);

}


// Initial Render

if(document.getElementById("pesticideContainer")){
renderPesticides(pesticides);
}