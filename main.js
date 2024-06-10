document.addEventListener('DOMContentLoaded',function(){


// variables
var noteCount =0;
var noteBody ='';
var isUpdate=false;
var recode='';
var note='';
var body='';

    // selecte the table
var items =document.getElementById('item');
var search =document.getElementById('srch');
var reset =document.getElementById('reset');

var nTitle =document.getElementById('n-title');
var nBody =document.getElementById('n-body');
var form =document.getElementById('add-frm');
    // select Table For display
    var tableDis =document.getElementById('table-div')
// Events
items.addEventListener('click',removeNote);
reset.addEventListener('click',resetAll);
form.addEventListener('submit',addNote);
items.addEventListener('click',viewNUpdateNote);
search.addEventListener('keyup',searchNote);
    // page on load
window.onload=updateTable();

 



// Functions
// reset Function 
function resetAll(){
    nTitle.value='';
    nBody.value='';
    isUpdate=false;
    noteBody ='';
}
//view and Update Note

function viewNUpdateNote(e){
    if(e.target.id=='btnV'){
        // get the element value $ and update input field
        recode =e.target.parentElement.parentElement;
        note =recode.firstChild;
        nTitle.value =note.firstChild.textContent;
        nBody.value =note.lastChild.textContent;
        isUpdate=true;


    }
}
// remove note function 
 function removeNote(e){
    var btndelete =e.target.id
    if(btndelete=='btnD'){
        if(confirm("Are you Sure !")){
            var tr =e.target.parentElement.parentElement;
            items.removeChild(tr);
            noteCount--;
            if(noteCount==0){
                updateTable();
            }
        }
       
    }

 }
// Search Func/

    function searchNote(e){
        var searchText=e.target.value.toLowerCase();
        var list = document.getElementsByClassName('item');
       var listA = Array.from(list);

       listA.forEach(function(item){
        var searchTitle  = item.firstChild.textContent;
        if(searchTitle.toLowerCase().indexOf(searchText)!=-1){
            item.style.display ='';
        }
        else{
            item.style.display='none';

        }

       });
       
    }
// Update 
function updateTable(){
    //Displaye when note are added 
    if(noteCount>0){
        tableDis.style.display ='';
        if(isUpdate){
            note.firstChild.textContent =nTitle.value;
            note.lastChild.textContent =nBody.value;

            //reset update and ncounting 
            isUpdate=false;
            noteCount--;
        }
        else{
            items.appendChild(noteBody);
        }
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
        
     }
     resetAll();
}














});