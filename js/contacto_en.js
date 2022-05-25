$(function () {
  $('input,textarea').jqBootstrapValidation({
    preventSubmit: true,
    submitSuccess: function ($form, event) {
      event.preventDefault();
      var name = $('input#name').val();
      var phone = $('input#phone').val();
      var email = $('input#email').val();
      var message = $('textarea#message').val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      if (name && phone && email && message) {
        $(function () {
          // Success message
          $('#success').html("<div class='alert alert-success text-center'>");
          $('#success > .alert-success')
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;",
            )
            .append('</button>');
          $('#success > .alert-success').append(
            '<strong>Message sent successfully!</strong>',
          );
          $('#success > .alert-success').append('</div>');

          $('#form-submit').fadeOut();
          //clear all fields
          $('#contactForm').trigger('reset');
        });
      } else {
        $(function () {
          // Fail message
          $('#success').html("<div class='alert alert-danger text-center'>");
          $('#success > .alert-danger')
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;",
            )
            .append('</button>');
          $('#success > .alert-danger').append(
            '<strong>Apparently there was an error, make sure the data is correct',
          );
          $('#success > .alert-danger').append('</div>');
        });
      }
    },
    filter: function () {
      return $(this).is(':visible');
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('');
});
