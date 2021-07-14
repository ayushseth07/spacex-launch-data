let fnum;
function fn(){
  var fnumber=document.getElementById("fnumber").value;
    document.getElementById("fnumber").value="";
    fnum=fnumber;
    getData();
}
let url= "https://api.spacexdata.com/v3/launches/"
function getData(){
fetch(url+fnum).then(function(response){
    return response.json();
}).then(function(obj){
    console.log(obj);
    document.getElementById("number").textContent= obj.flight_number;
    document.getElementById("year").textContent=obj.launch_year;
    document.getElementById("mname").textContent=obj.mission_name;
    document.getElementById("rname").textContent= obj.rocket.rocket_name ;
    document.getElementById("lsite").textContent=obj.launch_site.site_name_long;
    document.getElementById("mission_patch").style.display = "block";
    document.getElementById("mission_patch").src=obj.links.mission_patch_small;
    document.getElementById("artlink").href=obj.links.article_link;
    document.getElementById("mdetail").textContent=obj.details;
    if (obj.launch_success === true) {
      document.getElementById("result").textContent="Mission Successful";

    }
    else if (obj.launch_success === false) {
      document.getElementById("result").textContent="Mission Failure"

    }



    document.getElementById("vidframe").src=`https://www.youtube.com/embed/${obj.links.youtube_id}`;
}).catch(function(error){
    console.error('wrong');
    document.getElementById("number").textContent= "NA";
    document.getElementById("year").textContent="NA";
    document.getElementById("mname").textContent="NA";
    document.getElementById("rname").textContent= "NA";
    document.getElementById("lsite").textContent="NA";
    document.getElementById("artlink").href="NA";
    document.getElementById("mission_patch").style.display = "none";
    document.getElementById("artlink").href=obj.links.article_link;
    document.getElementById("vidframe").src=`https://www.youtube.com/embed/${obj.links.youtube_id}`;
    console.error(error);
});
}

// On Hit Enter
var input = document.getElementById("fnumber");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("sbtn").click();
  }
});

//Modal event handlers
const toggleModal = () => {
    document.querySelector('.modal')
      .classList.toggle('modal__hidden');
    document.querySelector('.overlay')
      .classList.toggle('overlay__hidden');
    stopVideo();
 }

const stopVideo = () => {
    let video__container = document.querySelector('.video__container');
    let iframe_tag = video__container.querySelector( 'iframe');
    if ( iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc;
    }
}
  document.querySelector('#vidBtn')
    .addEventListener('click', toggleModal);

  document.querySelector('.overlay')
    .addEventListener('click', toggleModal);

  document.querySelector('.modal__closebar')
    .addEventListener('click', toggleModal);

    removeload=()=>{
      var preloader=document.getElementById('preloading')
      preloader.style.display="none";
    }
myfunc=(togle)=>{
togle.classList.toggle("change");
}

//restarting animation after search
function reset_animation() {
  var el = document.getElementById("anim_1");
  el.style.animation = 'none';
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
  var el1 = document.getElementById("anim_2");
  el1.style.animation = 'none';
  el1.offsetHeight; /* trigger reflow */
  el1.style.animation = null;
  var el2 = document.getElementById("anim_3");
  el2.style.animation = 'none';
  el2.offsetHeight; /* trigger reflow */
  el2.style.animation = null;
  var el3 = document.getElementById("anim_4");
  el3.style.animation = 'none';
  el3.offsetHeight; /* trigger reflow */
  el3.style.animation = null;
  var el4 = document.getElementById("anim_5");
  el4.style.animation = 'none';
  el4.offsetHeight; /* trigger reflow */
  el4.style.animation = null;
  var el5 = document.getElementById("anim_6");
  el5.style.animation = 'none';
  el5.offsetHeight; /* trigger reflow */
  el5.style.animation = null;
}
