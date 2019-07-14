//deklarasi nama variabel
var name ;
// set nilai variabel
name = "HMTI";
//tampilkan di console
console.log("Namanya :" + name);

//tipe data number
var angka1 = 10; //integer
var angka2 = 5.5; //double/float

//tipe data boolean
var sudahNikah = true; // atau false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahNikah);

//tipe data array
var names = ["icha", "celsi", "denny"];

//tampilan data array
console.log(names);
console.log(names[1]);
console.log("Data Terakhir", names[names.length - 1])
console.log("Total: ", names.length);

// tipe data objek
var biodata = ["icha", 21, "Bekasi"];

var biodata = {
	name: "icha",
	age: 21,
	address: "Bekasi",
	"sudah nikah": false,
	hobbies: ["Coding", "Singing", "Sleepy", "Playing Game"],
	ucapKata: function(){
		console.log("WAYAE WAYAE");

	}
};

console.log(biodata);
console.log("Nama nya:",biodata.name);
console.log("Umur nya: ", biodata['age']);
console.log("Hobi ke 2", biodata.hobbies[1]);
console.log("Hobi ke 3", biodata["hobbies"][2]);
console.log("Hobi Terakhir", biodata.hobbies[biodata.hobbies.length - 1]);
biodata.ucapKata();

//arry of object
var peserta = [
	{
		name: "icha",
		age: 21
	},
	{
		name: "celsi",
		age: 21,
		address: "Bekasi"
	}
];

console.log(peserta);
console.log("Peserta Pertama", peserta[0]["name"]);
console.log("Umur Peserta Pertama", peserta[0].age);

console.log(2 === '2');

