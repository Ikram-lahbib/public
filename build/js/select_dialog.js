//-- FOR DIALOG FORM
function show_dialog(id){
  document.getElementById('sky-form').action=url+"/"+id;
  //add class bs-driver+id
  let dialog = document.getElementById("show_dialog");
      dialog.classList.add("bs-driver"+id);
      dialog.style.display = "block"; 
}


//-- FOR VALIDATION SELECT
function btn_effectuer(){

  let selectville = document.getElementById("selectville1"),
    value_ville = selectville.options[selectville.selectedIndex].text,
    select = document.getElementById("selectdriver1"),
    value_drive = select.options[select.selectedIndex].text;
  
  let button = document.getElementById("btn_affecter");

    if(value_ville && value_drive){
      if(value_ville != "aucun ville sélect" && value_drive != "aucun livreur sélect"){

        button.disabled = false;
      }else{
        button.disabled = true;
      }
    }
}


//-- FOR SELECT TAG
function update_selectville(){
	
	let selectville = document.getElementById("selectville1"),
		value_select = selectville.options[selectville.selectedIndex].text,
		select = document.getElementById("selectdriver1");


		while (select.length > 1) {
		  select.remove(1);
		}
		
	//let villes= JSON.parse('{{$city}}'.replace(/&quot;/g,'"'));
	//let drivers =JSON.parse('{{$drivers}}'.replace(/&quot;/g,'"'));
  //
	for(let ville of villes){
	    if(ville.nom === value_select){  
            for(let driver of drivers){
                if(driver.city_id == ville.id){
                    var opt = document.createElement('option');
                      opt.value = driver.id;
                      opt.innerHTML = driver.nom;
                      select.appendChild(opt);
                }
        	}
	    }
	}
}