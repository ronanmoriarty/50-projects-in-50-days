const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1468940491778-c20b1b6aa0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc2MDV8MHwxfGFsbHx8fHx8fHx8fDE2MjI3MDU4NzU&ixlib=rb-1.2.1&q=80&w=1080" alt="">';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, culpa!';
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'June 03, 2021';

  animated_bgs.forEach(el => el.classList.remove('animated-bg'));
  animated_bg_texts.forEach(el => el.classList.remove('animated-bg-text'));
}

setTimeout(getData, 2500);