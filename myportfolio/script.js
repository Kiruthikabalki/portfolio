//JS <i class="fa-solid fa-moon"></i>
	const iconMode=document.querySelector(".mode");
	
	function sun(){
		document.body.classList.toggle("light-mode");
		if(document.body.classList.contains("light-mode")){
			iconMode.innerHTML=`<i class="fa-solid fa-sun"></i>`;
		}else{
			iconMode.innerHTML=`<i class="fa-solid fa-moon"></i>`;
		}
	}
	
/* 	inputEl.checked=JSON.parse(localStorage.getItem("mode"));
	
	function updateLocalStorage(){
		localStorage.setItem("mode",JSON.stringify(inputEl.checked));
	} 
	.addEventListener("input",()=>{
		sun();
		updateLocalStorage();
	}) */
//----- Textmonial
	const text=document.querySelector("#Span");
	
	const profession=["Frontend Engineer","Web Designer","Web Developer"];
	
	let charIndex=0;
	let i=0;
	Update();
	function Update(){
		
		charIndex++;
		text.textContent=profession[i].slice(0,charIndex)+"|";
		if(charIndex == profession[i].length){
			i++;
			charIndex=0;
		}
		if(i == profession.length){
			i=0;
		}
		setTimeout(Update,400);
	}
	
// Swaiper function for mySkills
new Swiper('.wrapper', {
  loop: true,
	spaceBetween:30,
  // pagination Bullets
  pagination: {
    el: '.swiper-pagination',
		clickable:true,
		dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	breakpoints:{
		0:{
			slidePerView:1
		},
		768:{
			slidePerView:2
		},
		1024:{
			slidePerView:3
		},
	}

});
// Header tab page design
const header=document.querySelector(".navbar");
const ul=header.querySelector(".menu");
const menuItem=document.querySelectorAll("ul > .list");

menuItem.forEach((tab,index)=>{
	tab.addEventListener("click",()=>{
		header.querySelector(".active").classList.remove("active");
		tab.classList.add("active");
	})
})
//  Form Validation
const acknowledgement=document.querySelector(".acknowledgement");
const cross_check=document.querySelector(".cross-check");
const submitEl=document.querySelector(".submit");
let nameInput=document.querySelector("#name");
let emailInput=document.querySelector("#e-mail");
let emailPattern=/^[\w.]+@[a-z0-9-]+.[a-z]{1,5}$/;//amirthavalli98b@gmail.com
let namePattern=/[a-z]+|[A-Z]+/;
const name=namePattern.test(nameInput.value);
const email=emailPattern.test(emailInput.value);


submitEl.addEventListener("click",()=>{

	if(namePattern.test(nameInput.value) == true && emailPattern.test(emailInput.value) == true){
		acknowledgement.style.display ="flex";
		console.log(nameInput.value);
		cross_check.style.display ="none";
	}else{
		cross_check.style.display ="flex";
		acknowledgement.style.display ="none";
	} 
	function Submit(){
		document.register.reset();		
	}
	Submit();
}) 

// Project Details added by using callback()

const projectsContainer=document.querySelector(".collections");

Array.prototype.CustomFunction =function (callback){
	for(let i=0;i<this.length;i++){
		let proData = this[i];
		callback(proData);
		/* console.log(proData); */
	}
}
const arrayOfProjects=[
	{
		sitepic:"images/food_website.png",
		heading:"Food Website",
		Description:"Designed and developed a dynamic food website using HTML, CSS, and JavaScript, featuring interactive elements like menus, food galleries, and a contact form.Implemented responsive web design using CSS media queries, ensuring the website looks and functions well on desktops, tablets, and mobile devices.Integrated JavaScript for user interactivity, including form validation  and smooth scrolling navigation for user experience.",
	},
	{
		sitepic:"images/proj-pages/ProfileCard.png",
		heading:"Profile Card",
		Description:"I am designing a user profile card using modern web technologies. For styling, I use HTML5 and CSS3 features like external style sheets, flexbox for layout, positioning, and box-sizing to manage the element sizes. On the React side, I use props, arrays, and the map function to dynamically display user data from objects. This approach makes the design flexible, reusable, and easy to update.",
	},
	{
		sitepic:"images/proj-pages/Signinpage.png",
		heading:"Sign_In Page",
		Description:"I am designing a sign-in page using HTML5, CSS3, and JavaScript. For the layout and structure, I use HTML5 to create the necessary form elements like input fields and buttons. To make the page visually appealing, I use CSS3 for styling, including animations that give the page a dynamic and smooth feel. JavaScript is used to add functionality, such as form validation to ensure the user enters correct information before submitting.",
	},
	{
		sitepic:"images/proj-pages/foodgallery.png",
		heading:"Image Gallery",
		Description:"I am designing a responsive image gallery using HTML5, CSS3, and JavaScript. The gallery features animations, an external stylesheet, forms, and adapts to different screen sizes using media queries and a grid system. I am using JavaScript to handle user interactions with the DOM, adding event listeners, and filtering images with functions and arrays. This ensures the gallery is interactive, visually appealing, and works well on all devices.",
	},
	{
		sitepic:"images/proj-pages/RotatingImages.png",
		heading:"Rotating Images",
		Description:"I am designing a rotating image feature using HTML5, CSS3, and JavaScript. The CSS includes external stylesheets, flexbox for layout, positioning, box-sizing, and 3D animations to make the rotation smooth. JavaScript handles the timing of the rotation using setTimeout and interactive features with addEventListener. This combination creates an engaging and dynamic visual effect.",
	},
	{
		sitepic:"images/proj-pages/heartanimate.png",
		heading:"Heart Animation by Mouse Rendaring",
		Description:"I am designing a heart animation using HTML5, CSS3, and JavaScript. The heart moves in response to the mouse, creating a smooth and interactive effect. CSS animations help make the heart's movement fluid, while filters add visual effects like color changes. JavaScript is used to track the mouse position with an event listener and update the heart's position using setTimeout and offset properties. ",
	},
];
arrayOfProjects.CustomFunction(MyProjects);

function MyProjects(proData,index){

const container=document.createElement("div");
container.classList.add("site");
const paraEl=document.createElement("div");
paraEl.classList.add("para");
const imageEl=document.createElement("img");
imageEl.classList.add("Image");
const tileEl=document.createElement("h4");
tileEl.classList.add("tile");
const project_Description=document.createElement("p");
project_Description.classList.add("Description");
const spanEl=document.createElement("span");
spanEl.classList.add("arrow");
const iconEl=document.createElement("i");
let iconCalssname1="fa-arrow-right-from-bracket";
let iconCalssname2="fa-solid";
iconEl.classList.add(iconCalssname1);
iconEl.classList.add(iconCalssname2);
	
	container.appendChild(imageEl);
	paraEl.appendChild(tileEl);
	paraEl.appendChild(project_Description);
	spanEl.appendChild(iconEl);
	paraEl.appendChild(spanEl);
	container.appendChild(paraEl);
	projectsContainer.appendChild(container);
	
	imageEl.src =proData.sitepic;
	tileEl.textContent =proData.heading;
	project_Description.textContent =proData.Description;
	/* console.log(proData); */
}
