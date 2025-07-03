function deSelectAll() {
	document.getElementById("a").style.display = "none";
	document.getElementById("nav_a").style.background = "#342";
	document.getElementById("nav_a").style.color = "white";
	
	document.getElementById("b").style.display = "none";
	document.getElementById("nav_b").style.background = "#342";
	document.getElementById("nav_b").style.color = "white";
	
	document.getElementById("c").style.display = "none";
	document.getElementById("nav_c").style.background = "#342";
	document.getElementById("nav_c").style.color = "white";
	
	document.getElementById("d").style.display = "none";
	document.getElementById("nav_d").style.background = "#342";
	document.getElementById("nav_d").style.color = "white";
	
	document.getElementById("e").style.display = "none";
	document.getElementById("nav_e").style.background = "#342";
	document.getElementById("nav_e").style.color = "white";
	
	document.getElementById("f").style.display = "none";
	document.getElementById("nav_f").style.background = "#342";
	document.getElementById("nav_f").style.color = "white";
	
	document.getElementById("z").style.display = "none";
	document.getElementById("nav_z").style.background = "#342";
	document.getElementById("nav_z").style.color = "white";
}

function openNavItem(item) {
	deSelectAll();
	document.getElementById(item).style.display = "inline";
	let nav_item = "nav_" + item;
	document.getElementById(nav_item).style.background = "white";
	document.getElementById(nav_item).style.color = "black";
}

openNavItem("a");

document.getElementById("nav_a").onclick = function() {openNavItem("a");}
document.getElementById("nav_b").onclick = function() {openNavItem("b");}
document.getElementById("nav_c").onclick = function() {openNavItem("c");}
document.getElementById("nav_d").onclick = function() {openNavItem("d");}
document.getElementById("nav_e").onclick = function() {openNavItem("e");}
document.getElementById("nav_f").onclick = function() {openNavItem("f");}
document.getElementById("nav_z").onclick = function() {openNavItem("z");}
