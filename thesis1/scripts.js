function generator() {
	// word lists
	var firstPart = ["Kristen", "John", "Katie", "Daniel", "Sam",];
	var secondPart = ["and Siera", "and Nathan", "and Somaly", "and Jen", "and Damien"];

	// generate name
	var name = firstPart[Math.floor(Math.random() * firstPart.length)] + " " + secondPart[Math.floor(Math.random() * secondPart.length)];

	//alert(name);

	// remove name div if existing
	if (document.getElementById("name")) {
		document.getElementById("placeholder").removeChild(document.getElementById("name"));
	}

	// append to placeholder div
	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(name));
	document.getElementById("placeholder").appendChild(element);
}