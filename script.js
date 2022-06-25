document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');

    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});
$('.project-box').click(function(){
$('.overlay').removeClass('hide');
setTimeout(function(){
    document.getElementById('overlay').classList.add('hide');
    $('.view-actions').addClass('hide');
    $('.project-boxes').addClass('hide');
    $('.datatable').removeClass('hide');
  },1000)

});

$('.home').click(function(){

$('.view-actions').removeClass('hide');
$('.project-boxes').removeClass('hide');
$('.datatable').addClass('hide');
});


$("select").change(function()
{
$('.overlay').removeClass('hide');
setTimeout(function(){
    document.getElementById('overlay').classList.add('hide');
  },1000)

  $('.view-actions').removeClass('hide');
  $('.project-boxes').removeClass('hide');
  $('.datatable').addClass('hide');
});



$('.mode-switch').click(function(){
$('.datatable').toggleClass('white');
$('.selectclass').toggleClass('selectclassdark');
$('.overlay').toggleClass('overlaydark');
$('.fadeIn').toggleClass('fadedark');
$('.fadeOut').toggleClass('fadedark');
});
