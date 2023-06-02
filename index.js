let myLeads = [];
const inputEl = document.querySelector('#input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');
const tabBtn = document.getElementById('tab-btn');
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsfromlocalstorage ) {
  myLeads = leadsfromlocalstorage
  render(myLeads)
}

tabBtn.addEventListener("click", function(){

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

  });

});

function render(lead) {
  ulEl.innerHTML = ' '
 for (let i=0; i<lead.length; i++){
  ulEl.innerHTML += "<li> <a target='_blank' href='" + lead[i] + "'>" + lead[i] + "</a> </li>"
 };
};

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)
});

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  inputEl.value = ''
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads) 
});


