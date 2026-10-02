
const icon = document.querySelector(".main");
const image = document.querySelector(".image");
const image2=document.querySelector(".image2");
const cartText = document.querySelector(".main h1");

icon.style.backgroundColor = "orange";
icon.addEventListener("mouseover", () => {
    if (icon.style.backgroundColor === "orange") {
        icon.style.opacity = "0.7";
    }
});

icon.addEventListener("mouseout", () => {
    icon.style.opacity = "1";
});



// 3. Click Effect
icon.addEventListener("click", () => {
    image2.style.top = "31%";
    icon.style.opacity="1";
    icon.style.cursor = "default"; 
    setTimeout(()=>{
      image2.style.opacity = "0";    
    },700) ;
   
    setTimeout(() => {
        icon.style.backgroundColor = "green";
        cartText.style.color = "white";
        cartText.style.fontSize = "16px"; 
        cartText.innerHTML = "ADDED TO CART";
        image2.style.transition = "none"; 
        image2.src='check.png';
        image2.style.left="16%";
        image2.style.width='18px';
        image2.style.height='18px';
        image2.style.top="13%";
        image.style.width = '30px';
        image.style.height = '30px';
         image2.style.opacity = "0";  
        setTimeout(() => {
             image2.style.opacity = "1"; 
            image2.style.transform = "scale(0.3)"; 
        }, 10);
        setTimeout(() => {
            image2.style.transform = "scale(1.3)"; 
        }, 10);
        setTimeout(() => {
            image2.style.transform = "scale(1)";
        }, 300);
    }, 1200); 
});


