function toggleFromDropdown() {
  let dropdown = document.getElementById("from-dropdown");
  console.log(dropdown.style.display);
  
  if (dropdown.style.display === null || dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

function filterFunction() {
  var input, filter, div, listItem, txtValue, i;

  input = document.getElementById("from-selector-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("from-dropdown");
  listItem = div.getElementsByTagName("li");

  for (i = 0; i < listItem.length; i++) {
    txtValue = listItem[i].textContent || listItem[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      listItem[i].style.display = "";
    } else {
      listItem[i].style.display = "none";
    }
  }
}
