const costDrivers = [
	{
		id: "RELY",
		name: "Required Software Reliability",
		values: {
			very_low: 0.75,
			low: 0.88,
			average: 1,
			high: 1.15,
			very_high: 1.4,
			critical: 0
		}
	},
	{
		id: "DATA",
		name: "Size of Application Database",
		values: {
			very_low: 0,
			low: 0.94,
			average: 1,
			high: 1.08,
			very_high: 1.16,
			critical: 0
		}
	},
	{
		id: "CPLX",
		name: "Complexity of the Product",
		values: {
			very_low: 0.7,
			low: 0.85,
			average: 1,
			high: 1.15,
			very_high: 1.3,
			critical: 1.65
		}
	},
	{
		id: "TIME",
		name: "Run-Time Performance Constraints",
		values: {
			very_low: 0,
			low: 0,
			average: 1,
			high: 1.11,
			very_high: 1.3,
			critical: 1.65
		}
	},
	{
		id: "STOR",
		name: "Memory Constraints",
		values: {
			very_low: 0,
			low: 0,
			average: 1,
			high: 1.06,
			very_high: 1.21,
			critical: 1.56
		}
	},
	{
		id: "VIRT",
		name: "Volatility of the Virtual Machine Environment",
		values: {
			very_low: 0,
			low: 0.87,
			average: 1,
			high: 1.15,
			very_high: 1.3,
			critical: 0
		}
	},
	{
		id: "TURN",
		name: "Required Turnabout Time",
		values: {
			very_low: 0,
			low: 0.87,
			average: 1,
			high: 1.07,
			very_high: 1.15,
			critical: 0
		}
	},
	{
		id: "ACAP",
		name: "Analyst Capability",
		values: {
			very_low: 1.46,
			low: 1.19,
			average: 1,
			high: 0.86,
			very_high: 0.71,
			critical: 0
		}
	},
	{
		id: "AEXP",
		name: "Applications Experience",
		values: {
			very_low: 1.42,
			low: 1.17,
			average: 1,
			high: 0.86,
			very_high: 0.7,
			critical: 0
		}
	},
	{
		id: "PCAP",
		name: "Software Engineer Capability",
		values: {
			very_low: 1.29,
			low: 1.13,
			average: 1,
			high: 0.91,
			very_high: 0.82,
			critical: 0
		}
	},
	{
		id: "VEXP",
		name: "Virtual Machine Experience",
		values: {
			very_low: 1.21,
			low: 1.1,
			average: 1,
			high: 0.9,
			very_high: 0,
			critical: 0
		}
	},
	{
		id: "LEXP",
		name: "Programming Language Experience",
		values: {
			very_low: 1.14,
			low: 1.07,
			average: 1,
			high: 0.95,
			very_high: 0,
			critical: 0
		}
	},
	{
		id: "MODP",
		name: "Application of Software Engineering Methods",
		values: {
			very_low: 1.24,
			low: 1.1,
			average: 1,
			high: 0.91,
			very_high: 0.83,
			critical: 0
		}
	},
	{
		id: "TOOL",
		name: "Use of Software Tools",
		values: {
			very_low: 1.24,
			low: 1.1,
			average: 1,
			high: 0.91,
			very_high: 0.82,
			critical: 0
		}
	},
	{
		id: "SCED",
		name: "Required Development Schedule",
		values: {
			very_low: 1.23,
			low: 1.08,
			average: 1,
			high: 1.04,
			very_high: 1.1,
			critical: 0
		}
	},
]

function getEAF() {
	let EAF = 1;
	for (let i = 0; i < costDrivers.length; i++) {
		let prop = document.getElementsByName(costDrivers[i].id);
		for (let i = 0; i < prop.length; i++) {
			if (prop[i].checked) EAF *= parseFloat(prop[i].value);
		}
	}
	return EAF;
}

function getTable() {
	let table = "";
	for (let i = 0; i < costDrivers.length; i++) {
		table += "<tr><td>";
		table += costDrivers[i].name;
		table += "</td>";
		for (let val in costDrivers[i].values) {
			table += "<td>";
			if (costDrivers[i].values[val] == 0) {
				table += `<input type='radio' name="${costDrivers[i].id}" value='${costDrivers[i].values[val]}' disabled> n/a`;
			}
			else {
				table += `<input type='radio' name="${costDrivers[i].id}" value='${costDrivers[i].values[val]}'> ${costDrivers[i].values[val]}`;
			}

			table += "</td>";
		}
		table += "</tr>";
	}
	return table;

}
table.innerHTML += getTable();

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
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
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
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
	let EAF = getEAF();
	calc.effort = (EAF * calc.a * Math.pow(kloc, calc.b)).toFixed(2);
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
