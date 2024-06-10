document.addEventListener('DOMContentLoaded',function(){


// variables
var noteCount =0;
var noteBody ='';
    // selecte the table
var items =document.getElementById('item');

var nTitle =document.getElementById('n-title');
var nBody =document.getElementById('n-body');
var form =document.getElementById('add-frm');
    // select Table For display
    var tableDis =document.getElementById('table-div')
// Events
form.addEventListener('submit',addNote);
    // page on load
window.onload=updateTable();

 



// Functions


// Update 
function updateTable(){
    //Displaye when note are added 
    if(noteCount>0){
        tableDis.style.display ='';
        items.appendChild(noteBody);
    }
    else{
        tableDis.style.display='none';
    }
}
//add note
function addNote(e){
    // stop initial behaviour
    e.preventDefault();
    


    //Validation
     if(nTitle.value=='' || nBody.value==''){
        alert("Please Fill the field");
        
     }
     else{
        //create new note 
        //tr create
        var tr =document.createElement('tr');
        tr.className='item';

        // create TD
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(nTitle.value));

        var spanNbody =document.createElement('span');
        spanNbody.className ='note-body';

        spanNbody.appendChild(document.createTextNode(nBody.value));
        td1.appendChild(spanNbody);

        // create View button 
        var td2 =document.createElement('td');
        td2.className='btncell-view';
        var btn2 = document.createElement('button');
        btn2.appendChild(document.createTextNode('View'));
        btn2.setAttribute('id','btnV')
        td2.appendChild(btn2);

          // create Delete button 
          var td3 =document.createElement('td');
          td3.className='btncell-delete';
          var btn3 = document.createElement('button');
          btn3.appendChild(document.createTextNode('Delete'));
          btn3.setAttribute('id','btnD')
          td3.appendChild(btn3);

          // add the tr
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
        //   increament note count
          noteCount++;
        // set New note   
          noteBody=tr;

        // add or update 
        updateTable();  
        console.log(td3);
     }
}














});