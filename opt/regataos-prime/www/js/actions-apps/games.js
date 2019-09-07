var dir = "/tmp/regataos-prime/"
var dir2 = "/usr/share/regataos/gpu/prime/"

// steam
function steam_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-steam.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function steam_disable(){
	const exec = require('child_process').exec;
	var comando = "echo steam > "+dir+"noapps-hybrid-graphics-steam.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function steam(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-steam.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	steam_enable();
		$(".steam-off").css("display", "none")
		$(".steam-on").css("display", "block")
	return;
} else {
	steam_disable();
		$(".steam-off").css("display", "block")
		$(".steam-on").css("display", "none")
}
});
}

// pcsx2
function pcsx2_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-pcsx2.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function pcsx2_disable(){
	const exec = require('child_process').exec;
	var comando = "echo pcsx2 > "+dir+"noapps-hybrid-graphics-pcsx2.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function pcsx2(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-pcsx2.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	pcsx2_enable();
		$(".pcsx2-off").css("display", "none")
		$(".pcsx2-on").css("display", "block")
	return;
} else {
	pcsx2_disable();
		$(".pcsx2-off").css("display", "block")
		$(".pcsx2-on").css("display", "none")
}
});
}

// dolphin-emu
function dolphin_emu_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-dolphin-emu.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function dolphin_emu_disable(){
	const exec = require('child_process').exec;
	var comando = "echo dolphin-emu > "+dir+"noapps-hybrid-graphics-dolphin-emu.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function dolphin_emu(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-dolphin-emu.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	dolphin_emu_enable();
		$(".dolphin-emu-off").css("display", "none")
		$(".dolphin-emu-on").css("display", "block")
	return;
} else {
	dolphin_emu_disable();
		$(".dolphin-emu-off").css("display", "block")
		$(".dolphin-emu-on").css("display", "none")
}
});
}

// supertuxkart
function supertuxkart_enable(){
	const exec = require('child_process').exec;
	var comando = "rm -f "+dir+"noapps-hybrid-graphics-supertuxkart.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function supertuxkart_disable(){
	const exec = require('child_process').exec;
	var comando = "echo supertuxkart > "+dir+"noapps-hybrid-graphics-supertuxkart.txt; echo all-apps > "+dir+"all-apps-dri.txt; sudo "+dir2+"apps-hybrid-graphics start";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}

function supertuxkart(){
	const fs = require('fs');
fs.access(dir+'noapps-hybrid-graphics-supertuxkart.txt', (err) => {
  if (!err) {
	console.error('myfile already exists');
	supertuxkart_enable();
		$(".supertuxkart-off").css("display", "none")
		$(".supertuxkart-on").css("display", "block")
	return;
} else {
	supertuxkart_disable();
		$(".supertuxkart-off").css("display", "block")
		$(".supertuxkart-on").css("display", "none")
}
});
}
