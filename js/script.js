var p1 = document.getElementById('out1');
var p2 = document.getElementById('out2');
var p3 = document.getElementById('out3');
var p4 = document.getElementById('out4');
var p5 = document.getElementById('out5');
var p5a = document.getElementById('out5a');
var p6 = document.getElementById('out6');
var p6a = document.getElementById('out6a');
var p7 = document.getElementById('out7');
var p8 = document.getElementById('out8');
var p9 = document.getElementById('out9');
var p10 = document.getElementById('out10');
var p11 = document.getElementById('out11');
var p12 = document.getElementById('out12');
var p13 = document.getElementById('out13');

//--1--

var m = [7, [7, 8, 9], 17];

p1.innerHTML = m[1][2];

//--2--

var m2 = [5, {"one" : 2000, "two" : 4000}, 56];

p2.innerHTML = m2[1].two + ' + ' + m2[2];

//--3--

var m3 = {"one" : 5, "two" : [23, 45]}

p3.innerHTML = m3.two[1];

//--4--

var m4 = {"one" : 5, "two" : {"kkk" : 23, "mmm" : 45}}

p4.innerHTML = m4.two.mmm;

//--5--

var m5 = [
{
	"mts" : "+38050556677", 
	"life": "+093445566"
},
{
	"mts" : "+38050665544",
	"life" : "+093112233"
}
];

var out5 = '';
for (var i = 0; i < m5.length; i++) {
	out5 += `<span>${m5[i].mts}</span><br>`;
}

p5.innerHTML = out5;

var out5a = '';

for (var i = 0; i < m5.length; i++) {
	out5a += `<span>${m5[i].mts}</span><br>`;
	out5a += `<span>${m5[i].life}</span><br>`;
}

p5a.innerHTML = out5a;

//--6--

var m6 = {
	"phone1" : {
		"mts" : "+38050556677",
		"life" : "+093445566"
	},
	"phone2" : {
		"mts" : "+38050665544",
		"life" : "+093112233"
	}
}

var out6 = '';

for (var key in m6) {
	out6 += key + ' --- ' + m6[key].mts + '<br>';
}

p6.innerHTML = out6;

var out6a = '';

for (var key in m6) {
	out6a += key + ' --- ' + m6[key].mts + '<br>';
	out6a += key + ' --- ' + m6[key].life + '<br>';
}

p6a.innerHTML = out6a;

//--7--

var m7 = [
["+38050556677", "+093445566"],
["+38050665544", "+093112233"]
];

var out7 = '';

for (var i = 0; i < m7.length; i++) {
	for (var j = 0; j < m7[i].length; j++) {
		out7 += m7[i][j] + ';<br>';
	}
}

p7.innerHTML = out7;

//--8--

var mas7 = [2, 3, 4, 5, 6, 4, 77, 32, 4];

var out8 = '';

for (var i = 0; i < mas7.length; i++) {
	out8 += i + ' --- ' + mas7[i] + ';<br>'
}

p8.innerHTML = out8;

//--9--

var a = [4, 5, 6, 7, 8, 12, 32, 21, 41, 34, 25, 15, 11, 'hello'];

var out9 = '';

for (var i = 0; i < a.length; i++) {
	if (a[i] < 35) {
		out9 += a[i] + '; '
	}
}

p9.innerHTML = out9;

//--10--

var b = {
	"first" : {
		"name" : "Alex",
		"age": 17
	},
	"second" : {
		"name" : "Ivan",
		"age" : 27
	},
	"third" : {
		"name" : "Sergey",
		"age": 28
	},
	"fourth" : {
		"name" : "Vitaliy",
		"age": 30
	},
	"fifth" : {
		"name" : "Olga",
		"age" : 24
	}
};

out10 = '';

for (var key in b) {
	out10 += b[key].name + '; '
}

p10.innerHTML = out10;

//--11--

function showAge() {
	var out11 = '';
	var input11 = document.getElementById('inp11').value;

	for (var key in b) {
		if (b[key].age <= input11){
			out11 += b[key].name + '; '
		}
	}
	p11.innerHTML = out11;
}

//--12--

function showAgeByName() {
	var out12 = '';
	var input12 = document.getElementById('inp12').value;

	for (var key in b) {
		if (input12 == b[key].name) {
			out12 = b[key].age
		}
	}
	p12.innerHTML = out12;
}

//--13--
//ошибочно стал делать обычный массив, оставил для себя
// var arr = [34, 44, 654, 24, 1, 98, 2345, 8, 5];

// arr[1000] = 2;
// arr[434] = 3;

// console.log(arr);
// for (var i = 0, j = 0; i < arr.length; i++) {
// 	if (arr[i] !== undefined) {
// 		j++
// 	}
// }

// p13.innerHTML = j;



var arrAssoc = {
	"d" : 2,
	"dw" : 3,
	"dx" : 3,
	"dg" : 3,
	"dj" : 3,
	"du" : 3,
	"dp" : 3
}
var j = 0;
for (var key in arrAssoc) {
	j++
}

p13.innerHTML = j;