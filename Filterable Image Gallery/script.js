//Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
//console.log(filterButtons,filterableCards);

//Defining the filterCards function
const filterCards = event => {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    console.log(event.target)

    //Iterating over each filterable cards
    filterableCards.forEach(card => {
        //Adding "hide" class to hide the card initially
        card.classList.add("hide");
        //Checking if the card matches the selected filter or "all is selected"
        if(card.dataset.name === event.target.dataset.name
            || event.target.dataset.name === "all") {
                card.classList.remove("hide");
            }
    } );
};

//Add click event listener to each filter button
filterButtons.forEach(button => {
     button.addEventListener("click", filterCards);
});