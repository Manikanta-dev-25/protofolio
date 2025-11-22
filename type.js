var strings=['FrontEnd Developer','Web Developer','Software Engineer','Backend Developer']
var target=document.getElementById('typewriter');
var i=0;
var j= 0;
function type(){
   if(i<strings[j].length){
    target.textContent += strings[j].charAt(i);
    i++;
    setTimeout(type,100);
   }else{
    setTimeout(()=> {
        target.textContent='';
        i=0;
        j=(j+1)%strings.length;
        type();
    },2000);
   }
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const moreContent = card.querySelector(".moreContent");
  const toggleButton = card.querySelector(".toggleButton");

  let isShowMore = false;

  toggleButton.addEventListener("click", e => {
    e.preventDefault();
    isShowMore = !isShowMore;

    if (isShowMore) {
      moreContent.style.display = "block";
      toggleButton.textContent = "Read Less";
      card.style.zIndex = '100';
    } else {
      moreContent.style.display = "none";
      toggleButton.textContent = "Read More";
      card.style.zIndex = 'auto';
    }
  });
});

type();