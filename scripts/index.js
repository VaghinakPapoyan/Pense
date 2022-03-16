function addActiveClassNextElement(thisElement) 
{
	if (thisElement.classList[0] != undefined && thisElement.nextElementSibling.classList[0] != undefined) 
	{
		thisElement.classList.toggle(thisElement.classList[0] + "_active")
		thisElement.nextElementSibling.classList.toggle(thisElement.nextElementSibling.classList[0] + "_active")
	}
	else 
	{
		thisElement.classList.toggle("active");
		thisElement.nextElementSibling.classList.toggle("active");
	}
}
$('.brand').slick({
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.feedback').slick({
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  dots: true,
  slidesToShow: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});