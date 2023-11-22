window.addEventListener("load",function(){

	// 함수를 정의하여 해당 버튼 클릭 시 해당 pf-box를 표시
	function showBox(boxId) {
		// 모든 pf-box 요소를 숨깁니다.
		document.querySelectorAll('.pf-box1, .pf-box2, .pf-box3, .pf-box4, .pf-box5').forEach(function (box) {
		  box.style.display = 'none';
		});
		
		// 해당 버튼에 대한 pf-box를 표시합니다.
		document.querySelector(boxId).style.display = 'block';
	  }
	
	  // 각 버튼에 이벤트 리스너를 추가하여 함수를 호출
	  document.getElementById('pf1').addEventListener('click', function () {
		showBox('.pf-box1');
	  });
	
	  document.getElementById('pf2').addEventListener('click', function () {
		showBox('.pf-box2');
	  });
	
	  document.getElementById('pf3').addEventListener('click', function () {
		showBox('.pf-box3');
	  });
	
	  document.getElementById('pf4').addEventListener('click', function () {
		showBox('.pf-box4');
	  });
	
	  document.getElementById('pf-5').addEventListener('click', function () {
		showBox('.pf-box5');
	  });

	  var HmenuBtn = document.querySelector('.fa-bars')
	  var Hmenu = document.querySelector('.header-menu')
	  HmenuBtn.addEventListener("click",function(){
		Hmenu.classList.toggle("active")
	  })
 
})