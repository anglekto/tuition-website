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
