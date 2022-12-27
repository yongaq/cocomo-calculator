var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

function CocomoCalc(a, b, c, d) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;

	this.effort = 0;
	this.time = 0;
	this.people = 0;
}

function getValues(calc, kloc) {
	calc.effort = (calc.a * Math.pow(kloc, calc.b)).toFixed(2);
	calc.time = (calc.c * Math.pow(calc.effort, calc.d)).toFixed(2);
	calc.people = Math.round(calc.effort / calc.time);
}

function updateDisplay() {
	var type = document.getElementById("type");

	switch (type.value) {
		case "1":
			var calc = new CocomoCalc(2.4, 1.05, 2.5, 0.38);
			break;
		case "2":
			var calc = new CocomoCalc(3.0, 1.12, 2.5, 0.35);
			break;
		case "3":
			var calc = new CocomoCalc(3.6, 1.20, 2.5, 0.32);
			break;

	}

	klocVal = document.InputArea.KLOCEntry.value;

	getValues(calc, klocVal);

	document.DisplayArea.effort.value = calc.effort;
	document.DisplayArea.duration.value = calc.time;
	document.DisplayArea.developers.value = calc.people;
}

function KLOCValidate() {
	field = document.InputArea.KLOCEntry.value;

	if (parseFloat(field) <= 0 || isNaN(field)) {
		alert("Error! Write the correct number of lines");
		document.InputArea.KLOCEntry.value = "0";
	}
}