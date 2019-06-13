function nav() {
	const x = document.querySelector("#navLinks");
	if (x.className === "navLinks") {
		x.className += " responsive";
	} else {
		x.className = "navLinks";
	}
}


function navBtn() {
  const x = document.querySelector("#navBtn");
  if (x.className === "navBtn") {
    x.className += " responsive";
  } else {
    x.className = "navBtn";
  }
}

medSchoolCost = [
  {
    "label": "Public Medical School, In-State",
    "cost": 34592,
		"color":"red"
  },
  {
    label: "Public Medical School, Out-of-State",
    cost: 58668,
		color:"blue"
  },
  {
    label: "Private Medical School",
    cost: 50000
  },
  {
    label: "CAM Education",
    cost: 25000
  }
];


function barTemplate(data) {
  return `
  <div class="bar" >
  ${data.label}, ${data.cost}
  </div>
  `
}


document.querySelector(".right").innerHTML = `
<h2>Average Annual Cost of Tuition, 2016-2017</h2>
<div class="barGraph">
${medSchoolCost.map(barTemplate).join('')}
</div>
<div id="scale">
<div class="scale"><p>$10k</p></div>
<div class="scale"><p>$20k</p></div>
<div class="scale"><p>$30k</p></div>
<div class="scale"><p>$40k</p></div>
<div class="scale"><p>$50k</p></div>
<div class="scale"><p>$60k</p></div>
</div>
`;
