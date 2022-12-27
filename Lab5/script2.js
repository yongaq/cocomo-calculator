list = [
	{
		id: "1",
		name: "Data Communications"
	},
	{
		id: "2",
		name: "Distributed data processing"
	},
	{
		id: "3",
		name: "Performance"
	},
	{
		id: "4",
		name: "Heavily used configuration"
	},
	{
		id: "5",
		name: "Transaction rate"
	},
	{
		id: "6",
		name: "On-Line data entry"
	},
	{
		id: "7",
		name: "End-user efficiency"
	},
	{
		id: "8",
		name: "On-Line update"
	},
	{
		id: "9",
		name: "Complex processing"
	},
	{
		id: "10",
		name: "Reusability"
	},
	{
		id: "11",
		name: "Installation ease"
	},
	{
		id: "12",
		name: "Operational ease"
	},
	{
		id: "13",
		name: "Multiple sites"
	},
	{
		id: "14",
		name: "Facilitate change"
	}
]

function getRows(table) {
	for (let i = 0; i < list.length; i++) {
		table += "<tr><td>";
		table += list[i].name;
		table += "</td>";
		for (let j = 0; j < 6; j++) {
			table += "<td>";
			if (j == 3) {
				table += `<input type='radio' name="${list[i].id}" value='${j}' checked>`;
			} else {
				table += `<input type='radio' name="${list[i].id}" value='${j}'>`;
			}
			table += "</td>";
		}
		table += "</tr>";
	}
	return table;
}

function getTable() {
	let table = "";
	table += "<tr><th>Name</th><th>0</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>";
	return getRows(table);
}

table.innerHTML += getTable();

function getTDI(list) {
	let TDI = 0;
	for (let i = 0; i < list.length; i++) {
		let prop = document.getElementsByName(list[i].id);
		for (let i = 0; i < prop.length; i++) {
			if (prop[i].checked) TDI += parseFloat(prop[i].value);
		}
	}
	return TDI;
}

function getUFPC() {
	list = ["ilf", "eif", "ei", "eo", "eq"];
	let UFPS = 0;
	for (let i = 0; i < list.length; i++) {
		let prop = document.getElementsByName(list[i]);
		for (let i = 0; i < prop.length; i++) {
			if (prop[i].checked) {
				UFPS += parseInt(prop[i].value) * parseInt(document.getElementById(list[i]).value)
			}
		}
	}
	return UFPS;
}

function updateDisplay() {
	let VAF = (0.65 + 0.01 * getTDI(list)).toFixed(2);
	let AFPC = (getUFPC() * parseFloat(VAF)).toFixed(2);
	let SLOC = Math.round(AFPC * parseInt(document.getElementById("lang").value));

	document.DisplayArea.vaf.value = VAF;
	document.DisplayArea.afps.value = AFPC;
	document.DisplayArea.sloc.value = SLOC;
}

