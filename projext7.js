
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-contents');

    // Hide all tab contents initially
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    // Show the first tab content by default
    tabContents[0].style.display = 'block';

    // Add click event listener to each tab link
    tabLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Show the clicked tab's content
            tabContents[index].style.display = 'block';

            // Remove 'active-tab' class from all tabs
            tabLinks.forEach(tab => {
                tab.classList.remove('active-tab');
            });

            // Add 'active-tab' class to the clicked tab
            link.classList.add('active-tab');
        });
    });
});

// contact sec

 


// Get the menu by ID after the DOM is ready
let pagal = document.getElementById("pagal");

function openmenu() {
    pagal.style.right = "0";
}

function closenmenu() {
    pagal.style.right = "-200px";
};




//time


const clock=document.querySelector(".div");

setInterval(()=>{
    let date=new Date();
   clock.innerHTML=date.toLocaleTimeString();
    


},1000)
