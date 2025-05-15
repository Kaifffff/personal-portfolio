$('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

 $('.title').hover(
        function() {
          $(this).css('color', '#66fcf1');
        },
        function() {
          $(this).css('color', 'white');
        }
      );

// $(document).ready(function() {
//       $('#toggle-skill').click(function() {
//         $('#table').slideToggle();
//       });
//     }
// )      

