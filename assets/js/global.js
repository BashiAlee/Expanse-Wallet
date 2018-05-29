

//menu items

function mainMenu(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Menu
$(function() {
    $(".open-btn,.close-btn").click(function() {
      $(this).toggleClass("active");
      $('.menu-drawer').toggleClass("open");
    });
  });


//modals
   
        $(document).ready(function(){
          //modal-1
          $("#openbtn-1").click(function(){
           
              $("#modal-1").addClass("open-modal");
              
          });
          $("#closebtn-1").click(function(){
           
            $("#modal-1").removeClass("open-modal");  
          });
          //modal-2
          $("#openbtn-2").click(function(){
           
              $("#modal-2").addClass("open-modal");
              
          });
          $("#closebtn-2").click(function(){
           
            $("#modal-2").removeClass("open-modal");  
          });
          //modal-3
          $("#openbtn-3").click(function(){
           
              $("#modal-3").addClass("open-modal");
              
          });
          $("#closebtn-3").click(function(){
           
            $("#modal-3").removeClass("open-modal");  
          });
          //receive-modal
          $("#receive").click(function(){
           
            $("#receive-modal").addClass("open-modal");
            
        });
        $("#close-receive").click(function(){
         
          $("#receive-modal").removeClass("open-modal");  
        });



          //dropdown
          var x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select1":*/
        x = document.getElementsByClassName("custom-select1");
        for (i = 0; i < x.length; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          /*for each element, create a new DIV that will act as the selected item:*/
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /*for each element, create a new DIV that will contain the option list:*/
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 0; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
              /*when the select box is clicked, close any other select boxes,
              and open/close the current select box:*/
              e.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
            });
        }
        function closeAllSelect(elmnt) {
          /*a function that will close all select boxes in the document,
          except the current select box:*/
          var x, y, i, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
          for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
         var p = document.querySelector(".tabcontent").style
                  //****************************************************************************select js for participate page   *******************************************************************************************
                  var path = window.location.pathname;
                  var page = path.split("/").pop();
                var x = $('.tabcontent').css('display');
             
                 // if(x=='participate' && p.display == 'block') {
                  
                      var x, i, j, selElmnt, a, b, c;
                      /*look for any elements with the class "custom-select":*/
                      x = document.getElementsByClassName("custom-select");
                      for (i = 0; i < x.length; i++) {
                        selElmnt = x[i].getElementsByTagName("select")[0];
                        /*for each element, create a new DIV that will act as the selected item:*/
                        a = document.createElement("DIV");
                        a.setAttribute("class", "select-selected");
                        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                        x[i].appendChild(a);
                        /*for each element, create a new DIV that will contain the option list:*/
                        b = document.createElement("DIV");
                        b.setAttribute("class", "select-items select-hide");
                        for (j = 0; j < selElmnt.length; j++) {
                          /*for each option in the original select element,
                          create a new DIV that will act as an option item:*/
                          c = document.createElement("DIV");
                          c.innerHTML = selElmnt.options[j].innerHTML;
                          c.addEventListener("click", function(e) {
                              /*when an item is clicked, update the original select box,
                              and the selected item:*/
                              var y, i, k, s, h;
                              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                              h = this.parentNode.previousSibling;
                              for (i = 0; i < s.length; i++) {
                                if (s.options[i].innerHTML == this.innerHTML) {
                                  s.selectedIndex = i;
                                  h.innerHTML = this.innerHTML;
                                  y = this.parentNode.getElementsByClassName("same-as-selected");
                                  for (k = 0; k < y.length; k++) {
                                    y[k].removeAttribute("class");
                                  }
                                  this.setAttribute("class", "same-as-selected");
                                  break;
                                }
                              }
                              h.click();
                          });
                          b.appendChild(c);
                        }
                        x[i].appendChild(b);
                        a.addEventListener("click", function(e) {
                            /*when the select box is clicked, close any other select boxes,
                            and open/close the current select box:*/
                            e.stopPropagation();
                            closeAllSelect(this);
                            this.nextSibling.classList.toggle("select-hide");
                            this.classList.toggle("select-arrow-active");
                          });
                      }
                      function closeAllSelect(elmnt) {
                        /*a function that will close all select boxes in the document,
                        except the current select box:*/
                        var x, y, i, arrNo = [];
                        x = document.getElementsByClassName("select-items");
                        y = document.getElementsByClassName("select-selected");
                        for (i = 0; i < y.length; i++) {
                          if (elmnt == y[i]) {
                            arrNo.push(i)
                          } else {
                            y[i].classList.remove("select-arrow-active");
                          }
                        }
                        for (i = 0; i < x.length; i++) {
                          if (arrNo.indexOf(i)) {
                            x[i].classList.add("select-hide");
                          }
                        }
                      }
                      document.addEventListener("click", closeAllSelect);
                //  }
              
              //****************************************************************************select js for sent page   *******************************************************************************************
                 // if(page=='sent.html') {
                      jQuery('.drop-down').append('<div class="button selectbtn"></div>');    
                      jQuery('.drop-down').append('<ul class="select-list"></ul>');    
                      jQuery('.drop-down select option').each(function() {  
                          var backgroundimg = jQuery('.drop-down select').find(':selected').css('background-image');
                          var partsOfStr = backgroundimg.split(',');
                          
                      // console.log(partsOfStr)
                      jQuery('.select-list').append('<li class="clsAnchor"><span value="' + jQuery(this).val() + '" class="' + jQuery(this).attr('class') + '" style=background-repeat:no-repeat,no-repeat;background-image:' + partsOfStr[0] +','+partsOfStr[1].trim() + '>' + jQuery(this).text() + '</span></li>');   
                      });    
                  
                      var backgroundimg = jQuery('.drop-down select').find(':selected').css('background-image');
                      var partsOfStr = backgroundimg.split(',');
                  
                  
                      jQuery('.drop-down .button').html('<span class="btnspan" style=background-repeat:no-repeat,no-repeat;background-image:' +partsOfStr[0] +','+partsOfStr[1].trim() + '>' + jQuery('.drop-down select').find(':selected').text() + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><embed src="img/dropdownarrow.svg" alt="no display" /></a>');   
                      jQuery('.drop-down ul li').each(function() {   
                      if (jQuery(this).find('span').text() == jQuery('.drop-down select').find(':selected').text()) {  
                      jQuery(this).addClass('active');       
                      }      
                      });     
                      jQuery('.drop-down .select-list span').on('click', function()
                      {          
                      var dd_text = jQuery(this).text();  
                      var dd_img = jQuery(this).css('background-image'); 
                      var partsOfStr = dd_img.split(',');
                      var dd_val = jQuery(this).attr('value');   
                      jQuery('.drop-down .button').html('<span class="btnspan" style=background-repeat:no-repeat,no-repeat;background-image:' + partsOfStr[0] +','+partsOfStr[1].trim()  + '>' + dd_text + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><embed src="img/dropdownarrow.svg" alt="no display" />  </a>');      
                      jQuery('.drop-down .select-list span').parent().removeClass('active');    
                      jQuery(this).parent().addClass('active');     
                      $('.drop-down select[name=options]').val( dd_val ); 
                      $('.drop-down .select-list li').slideUp();     
                      });       
                      jQuery('.select-list-link').on('click','embed', function()
                      {      
                      jQuery('.drop-down ul li').slideToggle();  
                      });     
                  
                      jQuery('.fundsFrom').on('click','.selectbtn', function()
                      {      
                      jQuery('.drop-down ul li').slideToggle();  
                      });  
                      /* End */  
                //  }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);

        var p = document.getElementById("price"),
        res = document.getElementById("result");
    
    p.addEventListener("input", function() {
        res.innerHTML = p.value + " ETHER ";
    }, false); 
        });
        
        
        