  //home part


    function ChangeColor(){
        document.getElementById('about_text').style.color="red";
    }
  	function ShowModal1(){
    		var x = document.getElementById('modal1');
    		x.style.display = "inline";
    		
    		document.getElementById('form').style.filter = 'blur(10px)';
    		document.getElementById('bar').style.filter = 'blur(10px)';
    		document.getElementById('deals').style.filter = 'blur(10px)';
    	}

    	function CloseModal1(){
    		    		var x = document.getElementById('modal1');
    		x.style.display = "none";
    		document.getElementById('form').style.filter = 'none';
    		document.getElementById('bar').style.filter = 'none';
    		document.getElementById('deals').style.filter = 'none';
    	}

    	    	function ShowModal2(){
    		var x = document.getElementById('modal2');
    		x.style.display = "inline";
    		
    		document.getElementById('form').style.filter = 'blur(10px)';
    		document.getElementById('bar').style.filter = 'blur(10px)';
    		document.getElementById('deals').style.filter = 'blur(10px)';
    	}

    	function CloseModal2(){
    		    		var x = document.getElementById('modal2');
    		x.style.display = "none";
    		document.getElementById('form').style.filter = 'none';
    		document.getElementById('bar').style.filter = 'none';
    		document.getElementById('deals').style.filter = 'none';
    	}
        // end of home part


        //menu part
        function setImage(){
            var category = document.getElementById("category").value;
            var item1Img = document.getElementById("item1_img");
            var item2Img = document.getElementById("item2_img");
            var item3Img = document.getElementById("item3_img");
            var item1Text = document.getElementById("item1_Text");
            var item2Text = document.getElementById("item2_Text");
            var item3Text = document.getElementById("item3_Text");



            if(category == "Beef Burger"){
                item1Img.src="Beef Burger.jpg";
                item2Img.src="Beef Burger.jpg";
                item3Img.src="Beef Burger.jpg";
                item1Text.innerHTML = "Beef Burger"
                item2Text.innerHTML = "Beef Burger"
                item3Text.innerHTML = "Beef Burger"
            } else if(category == "Chicken Burger"){
                item1Img.src="Chicken Burger.jpg";
                item2Img.src="Chicken Burger.jpg";
                item3Img.src="Chicken Burger.jpg";
                item1Text.innerHTML = "Chicken Burger"
                item2Text.innerHTML = "Chicken Burger"
                item3Text.innerHTML = "Chicken Burger"

            } else if(category == "Fish Burger"){
                item1Img.src="Fish Burger.jpg";
                item2Img.src="Fish Burger.jpg";
                item3Img.src="Fish Burger.jpg";
                item1Text.innerHTML = "Fish Burger"
                item2Text.innerHTML = "Fish Burger"
                item3Text.innerHTML = "Fish Burger"

            } else if(category == "Chicken Zinger Burger"){
                item1Img.src="Chicken Zinger Burger.jpg";
                item2Img.src="Chicken Zinger Burger.jpg";
                item3Img.src="Chicken Zinger Burger.jpg";
                item1Text.innerHTML = "Chicken Zinger Burger"
                item2Text.innerHTML = "Chicken Zinger Burger"
                item3Text.innerHTML = "Chicken Zinger Burger"

            } else if(category == "Fish Zinger Burger"){
                item1Img.src="Fish Zinger Burger.jpg";
                item2Img.src="Fish Zinger Burger.jpg";
                item3Img.src="Fish Zinger Burger.jpg";
                item1Text.innerHTML = "Fish Zinger Burger"
                item2Text.innerHTML = "Fish Zinger Burger"
                item3Text.innerHTML = "Fish Zinger Burger"

            }else if(category == "Chicken Broast"){
                item1Img.src="Chicken Broast.jpg";
                item2Img.src="Chicken Broast.jpg";
                item3Img.src="Chicken Broast.jpg";
                item1Text.innerHTML = "Chicken Broast"
                item2Text.innerHTML = "Chicken Broast"
                item3Text.innerHTML = "Chicken Broast"

            }
             else {
                item1Img.src="";
                item2Img.src="";
                item3Img.src="";}

                item1Text.style.color="white";
                item2Text.style.color="white";
                item3Text.style.color="white";
        }


//Inventory system


// to requesting xml file
function getDoc(){

    if(window.XMLHttpRequest){
        request = new XMLHttpRequest();

    } else if(window.ActiveXObject){
        request = new ActiveXObject("Microsoft.XMLHTTP"); }

    if(request.overrideMimeType){
        request.overrideMimeType("text/xml");

    }   

    if(request){
        request.open("GET" , "Foods.xml" , true);
        request.onreadystatechange = function(){
            if(request.readyState == 4 && request.status == 200){
                var xmlDocument = request.responseXML;
            findClass(xmlDocument);

                //to display text
                //document.write(request.responseText);
            }

        } 
        request.send(null);
    } //END OF IF
    
} // END OF GETDOC


//extracting and displaying xml file

function findClass(xml){

    var titleNode = xml.getElementsByTagName('Name');
    var Availablefoods = xml.getElementsByTagName('Available');
    var inStock = xml.getElementsByTagName('inStock');
    for(i = 0; i<titleNode.length; i++){
        var title = titleNode[i];
        var titleValue = title.firstChild.nodeValue;

        var myEl = document.createElement('p');
        var newText = titleValue;
        var myTx = document.createTextNode(newText);
        myEl.appendChild(myTx);
        var dataContainer = document.getElementById('menudetails_DataContainer');





       
        var currentAvail = Availablefoods[i];
        var newAvail = "Available: " + currentAvail.firstChild.nodeValue;
        var availtext = document.createTextNode(newAvail);
        

        var mynewEl = document.createElement('p');
        mynewEl.appendChild(availtext);
        //dataContainer.appendChild(mynewEl);


        var currentStock = inStock[i];
        var newStockNo = "Stock: " + currentStock.firstChild.nodeValue;
        var Stocktext = document.createTextNode(newStockNo );
        

        var mynewEl1 = document.createElement('p');
        mynewEl1.appendChild(Stocktext);
        //dataContainer.appendChild(mynewEl1);


                // creating table

        var table = document.createElement('table');
        var row = document.createElement('tr');
        var cell = document.createElement('td');

        row.appendChild(myEl);
        cell.appendChild(mynewEl);
        cell.appendChild(mynewEl1);
        row.appendChild(cell);
        //table.appendChild(row);



        table = document.getElementById('dataTable');

        //dataContainer.appendChild(table);
        table.appendChild(row);


        //table dom propoerties
        table.style.overflow = "auto";
        dataContainer.style.overflow = "auto";
        cell.style.backgroundColor="white";
       
        cell.style.border="1px solid black";
        
    }


var button1 = document.getElementById('displaydata');
button1.disabled = true;

}

function dropdown(){
    document.getElementById('displaydata').disabled = false;
   var table = document.getElementById('dataTable');
    document.getElementsByTagName('tr').innerHTML = "";
}

