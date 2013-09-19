
var wn = createDialog();
wn.w.active = true;
wn.addEventListener ("keydown", function (e) {pressed (e)});
wn.closeBtn.addEventListener("click", function(e) {wn.close();});
wn.createBtn.addEventListener("click", function(e) {createShape();});
wn.show();

	dlg.add("statictext",{x:10, y:98, width:80, height:20}, "x(x)");
	dlg.createBtn = dlg.add("button",{x:230, y:10, width:80, height:24}, "Create");
	var x = parseFloat(wn.x.text);
	var y = parseFloat(wn.y.text);
	var w = parseFloat(wn.w.text);
	var h = parseFloat(wn.h.text);
	var r = parseFloat(wn.r.text);
	
	var idMk = charIDToTypeID( "Mk  " );
}

 
function pressed (e) {
	switch(e.keyName) {
		case "W":
		wn.w.active = true;
		e.preventDefault();
		break;
		case "H":
		wn.h.active = true;
		e.preventDefault();
		break;
		case "R":
		wn.r.active = true;
		e.preventDefault();
		break;
		case "X":
		wn.x.active = true;
		e.preventDefault();
		break;
		case "Y":
		wn.y.active = true;
		e.preventDefault();
		break;
		case "Enter":
		createShape();
		e.preventDefault();
		break;
		
	}
}