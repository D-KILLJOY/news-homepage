const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navigation = document.querySelector(".nav-list");

navOpen.addEventListener("click", () => {
	navigation.classList.add("nav-list-active");
	navClose.style.display = "block";
	navOpen.style.display = "none";
});

navClose.addEventListener("click", () => {
	navigation.classList.remove("nav-list-active");
	navClose.style.display = "none";
	navOpen.style.display = "block";
});
