const effortMultipliers = [
	{
		id: "ACAP",
		name: "Analyst Capability",
		values: {
			very_low: 1.42,
			low: 1.29,
			average: 1.00,
			high: 0.85,
			very_high: 0.71,
			critical: 0
		}
	},
	{
		id: "AEXP",
		name: "Applications Experience",
		values: {
			very_low: 1.22,
			low: 1.10,
			average: 1.00,
			high: 0.88,
			very_high: 0.81,
			critical: 0
		}
	},
	{
		id: "PCAP",
		name: "Programmer Capability",
		values: {
			very_low: 1.34,
			low: 1.15,
			average: 1.00,
			high: 0.88,
			very_high: 0.76,
			critical: 0
		}
	},
	{
		id: "PCON",
		name: "Personnel Continuity",
		values: {
			very_low: 1.29,
			low: 1.12,
			average: 1.00,
			high: 0.90,
			very_high: 0.81,
			critical: 0
		}
	},
	{
		id: "PEXP",
		name: "Platform Experience",
		values: {
			very_low: 1.19,
			low: 1.09,
			average: 1.00,
			high: 0.91,
			very_high: 0.85,
			critical: 0
		}
	},
	{
		id: "LTEX",
		name: "Language and Tool Experience",
		values: {
			very_low: 1.20,
			low: 1.09,
			average: 1.00,
			high: 0.91,
			very_high: 0.84,
			critical: 0
		}
	},
	{
		id: "RELY",
		name: "Required Software Reliability",
		values: {
			very_low: 0.84,
			low: 0.92,
			average: 1.00,
			high: 1.10,
			very_high: 1.26,
			critical: 0
		}
	},
	{
		id: "DATA",
		name: "Database Size",
		values: {
			very_low: 0,
			low: 0.23,
			average: 1.00,
			high: 1.14,
			very_high: 1.28,
			critical: 0
		}
	},
	{
		id: "CPLX",
		name: "Software Product Complexity",
		values: {
			very_low: 0.73,
			low: 0.87,
			average: 1.00,
			high: 1.17,
			very_high: 1.34,
			critical: 1.74
		}
	},
	{
		id: "RUSE",
		name: "Required Reusability",
		values: {
			very_low: 0,
			low: 0.95,
			average: 1.00,
			high: 1.07,
			very_high: 1.15,
			critical: 1.24
		}
	},
	{
		id: "DOCU",
		name: "Documentation Match to Life-Cycle Needs",
		values: {
			very_low: 0.81,
			low: 0.91,
			average: 1.00,
			high: 1.11,
			very_high: 1.23,
			critical: 0
		}
	},
	{
		id: "TIME",
		name: "Execution Time Constraint",
		values: {
			very_low: 0,
			low: 0,
			average: 1.00,
			high: 1.11,
			very_high: 1.29,
			critical: 1.63
		}
	},
	{
		id: "STOR",
		name: "Main Storage Constraint",
		values: {
			very_low: 0,
			low: 0,
			average: 1.00,
			high: 1.05,
			very_high: 1.17,
			critical: 1.46
		}
	},
	{
		id: "PVOL",
		name: "Platform Volatility",
		values: {
			very_low: 0,
			low: 0.87,
			average: 1.00,
			high: 1.15,
			very_high: 1.30,
			critical: 0
		}
	},
	{
		id: "TOOL",
		name: "Use of Software Tools",
		values: {
			very_low: 1.17,
			low: 1.09,
			average: 1.00,
			high: 0.90,
			very_high: 0.78,
			critical: 0
		}
	},
	{
		id: "SITE",
		name: "Multisite Development",
		values: {
			very_low: 1.22,
			low: 1.09,
			average: 1.00,
			high: 0.93,
			very_high: 0.86,
			critical: 0.80
		}
	},
	{
		id: "SCED",
		name: "Required Development Schedule",
		values: {
			very_low: 1.43,
			low: 1.14,
			average: 1.00,
			high: 1.00,
			very_high: 1.00,
			critical: 0
		}
	}
]


const earlyDesignMultipliers = [
	{
		id: "PERS",
		name: "Personnel Capability",
		values: {
			extra_low: 2.12,
			very_low: 1.62,
			low: 1.16,
			average: 1.00,
			high: 0.83,
			very_high: 0.63,
			critical: 0.50
		}
	},
	{
		id: "PREX",
		name: "Personnel Experience",
		values: {
			extra_low: 1.59,
			very_low: 1.33,
			low: 1.22,
			average: 1.00,
			high: 0.87,
			very_high: 0.74,
			critical: 0.62
		}
	},
	{
		id: "RCPX",
		name: "Product Reliability and Complexity",
		values: {
			extra_low: 0.49,
			very_low: 0.60,
			low: 0.83,
			average: 1.00,
			high: 1.33,
			very_high: 1.91,
			critical: 2.72
		}
	},
	{
		id: "RUSE",
		name: "Developed for Reusability",
		values: {
			extra_low: 0,
			very_low: 0,
			low: 0.95,
			average: 1.00,
			high: 1.07,
			very_high: 1.15,
			critical: 1.24
		}
	},
	{
		id: "PDIF",
		name: "Platform Difficulty",
		values: {
			extra_low: 0,
			very_low: 0,
			low: 0.87,
			average: 1.00,
			high: 1.29,
			very_high: 1.81,
			critical: 2.61
		}
	},
	{
		id: "FCIL",
		name: "Facilities",
		values: {
			extra_low: 1.43,
			very_low: 1.30,
			low: 1.10,
			average: 1.00,
			high: 0.87,
			very_high: 0.73,
			critical: 0.62
		}
	},
	{
		id: "SCED",
		name: "Required Development Schedule",
		values: {
			extra_low: 0,
			very_low: 1.43,
			low: 1.14,
			average: 1.00,
			high: 1.00,
			very_high: 0,
			critical: 0
		}
	}
]

const scaleFactors = [
	{
		id: "PREC",
		name: "Precedentedness",
		values: {
			very_low: 6.20,
			low: 4.96,
			average: 3.72,
			high: 2.48,
			very_high: 1.24,
			critical: 0
		}
	},
	{
		id: "FLEX",
		name: "Development Flexibility",
		values: {
			very_low: 5.07,
			low: 4.05,
			average: 3.04,
			high: 2.03,
			very_high: 1.01,
			critical: 0
		}
	},
	{
		id: "RESL",
		name: "Architecture / Risk Resolution",
		values: {
			very_low: 7.07,
			low: 5.65,
			average: 4.24,
			high: 2.83,
			very_high: 1.41,
			critical: 0
		}
	},
	{
		id: "TEAM",
		name: "Team Cohesion",
		values: {
			very_low: 5.48,
			low: 4.38,
			average: 3.29,
			high: 2.19,
			very_high: 1.10,
			critical: 0
		}
	},
	{
		id: "PMAT",
		name: "Process Maturity",
		values: {
			very_low: 7.80,
			low: 6.24,
			average: 4.68,
			high: 3.12,
			very_high: 1.56,
			critical: 0
		}
	},
]


const cocomo2Coefficients = {
	early_design: {
		a: 2.94,
		b: 0.91,
		c: 3.67,
		d: 0.28
	},
	post_architecture: {
		a: 2.45,
		b: 0.91,
		c: 3.67,
		d: 0.28
	}
}

function getSF() {
	let SF = 0;
	for (let i = 0; i < scaleFactors.length; i++) {
		let prop = document.getElementsByName(scaleFactors[i].id);
		for (let i = 0; i < prop.length; i++) {
			if (prop[i].checked) SF += parseFloat(prop[i].value);
		}
	}
	return SF;
}

function countPM(list) {
	x = document.getElementById("type").value;
	if (x == "1") {
		E = cocomo2Coefficients.early_design.b + 0.01 * getSF();
		PM = getEAF(list) * cocomo2Coefficients.early_design.a * Math.pow(klocVal, E);
	} else if (x == "2") {
		E = cocomo2Coefficients.post_architecture.b + 0.01 * getSF();
		PM = getEAF(list) * cocomo2Coefficients.post_architecture.a * Math.pow(klocVal, E);
	}
	return PM;
}

function countTime(list) {
	x = document.getElementById("type").value;
	klocVal = document.InputArea.KLOCEntry.value;

	if (x == "1") {
		TM = getSCED() * cocomo2Coefficients.early_design.c * Math.pow((countPM(list) / getSCED()), cocomo2Coefficients.early_design.d + 0.2 * (cocomo2Coefficients.early_design.b + 0.01 * getSF() - cocomo2Coefficients.early_design.b));
	} else if (x == "2") {
		TM = getSCED() * cocomo2Coefficients.post_architecture.c * Math.pow((countPM(list) / getSCED()), cocomo2Coefficients.post_architecture.d + 0.2 * (cocomo2Coefficients.post_architecture.b + 0.01 * getSF() - cocomo2Coefficients.post_architecture.b));
	}
	return TM;
}

function getEAF(list) {
	let EAF = 1;
	for (let i = 0; i < list.length; i++) {
		let prop = document.getElementsByName(list[i].id);
		for (let i = 0; i < prop.length; i++) {
			if (prop[i].checked) EAF *= parseFloat(prop[i].value);
		}
	}
	return EAF;
}

function getSCED() {
	let prop = document.getElementsByName("SCED");
	for (let i = 0; i < prop.length; i++) {
		if (prop[i].checked){
			console.log(parseFloat(prop[i].value));
			return parseFloat(prop[i].value);
		} 
	}
}


	function getTable(list) {
		x = document.getElementById("type").value;

		let table = "";
		if (x == "1") {
			table += "<tr><th rowspan='2'>Effort Multipliers</th><th colspan='7'>Rating</th></tr><tr><td>Extra low</td><td>Very low</td><td>Low</td><td>Nominal</td><td>High</td><td>Very high</td><td>Extra high</td></tr>"
		} else {
			table += "<tr><th rowspan='2'>Effort Multipliers</th><th colspan='6'>Rating</th></tr><tr><td>Very low</td><td>Low</td><td>Nominal</td><td>High</td><td>Very high</td><td>Extra high</td></tr>";
		}
		return getRows(list, table);

	}

	function getRows(list, table){
		for (let i = 0; i < list.length; i++) {
			table += "<tr><td>";
			table += list[i].name;
			table += "</td>";
			for (let val in list[i].values) {
				table += "<td>";
				if (list[i].values[val] == 0) {
					table += `<input type='radio' name="${list[i].id}" value='${list[i].values[val]}' disabled> n/a`;
				}
				else if(val == "average"){
					table += `<input type='radio' name="${list[i].id}" value='${list[i].values[val]}' checked> ${list[i].values[val]} `;
				}
				else {
					table += `<input type='radio' name="${list[i].id}" value='${list[i].values[val]}'> ${list[i].values[val]}`;
				}

				table += "</td>";
			}
			table += "</tr>";
		}
		return table;
	}

	function getTable1(list) {
		let table = "";
		table += "<tr><th rowspan='2'>Scale Factors</th><th colspan='6'>Rating</th></tr><tr><td>Very low</td><td>Low</td><td>Nominal</td><td>High</td><td>Very high</td><td>Extra high</td></tr>";
		return getRows(list, table);
	}

	table1.innerHTML += getTable1(scaleFactors);


	function buildTable2() {
		let x = document.getElementById("type").value;
		if (x == "1") {
			table2.innerHTML = getTable(earlyDesignMultipliers);

		} else if (x == "2") {
			table2.innerHTML = getTable(effortMultipliers);
		}
	}


	function getValues(calc, kloc) {
		let EAF = getEAF();
		calc.effort = (EAF * calc.a * Math.pow(kloc, calc.b)).toFixed(2);
		calc.time = (calc.c * Math.pow(calc.effort, calc.d)).toFixed(2);
		calc.people = Math.round(calc.effort / calc.time);
	}

	function updateDisplay() {

		klocVal = document.InputArea.KLOCEntry.value;

		x = document.getElementById("type").value;
		if (x == "1") {
			document.DisplayArea.effort.value = countPM(earlyDesignMultipliers);
			document.DisplayArea.duration.value = countTime(earlyDesignMultipliers);
		} else if (x == "2") {
			document.DisplayArea.effort.value = countPM(effortMultipliers);
			document.DisplayArea.duration.value = countTime(effortMultipliers);
		}
	}

	function KLOCValidate() {
		field = document.InputArea.KLOCEntry.value;

		if (parseFloat(field) <= 0 || isNaN(field)) {
			alert("Error! Write the correct number of lines");
			document.InputArea.KLOCEntry.value = "0";
		}
	}
