$(function () {

     /* ===============================================================
         INITIALIZING ANIMATE ON SCROLL
      =============================================================== */
  
        AOS.init();

    /* ===============================================================
         LIGHTBOX
      =============================================================== */
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });


    /* ===============================================================
         PRODUCT SLIDER
      =============================================================== */
    $('.product-slider').owlCarousel({
        items: 1,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });


    /* ===============================================================
         PRODUCT QUNATITY
      =============================================================== */
      $('.dec-btn').click(function () {
          let siblings = $(this).siblings('input');
          if (parseInt(siblings.val(), 10) >= 1) {
              siblings.val(parseInt(siblings.val(), 10) - 1);
          }
      });

      $('.inc-btn').click(function () {
          let siblings = $(this).siblings('input');
          siblings.val(parseInt(siblings.val(), 10) + 1);
      });


      /* ===============================================================
           BOOTSTRAP SELECT
        =============================================================== */
      $('.selectpicker').on('change', function () {
          $(this).closest('.dropdown').find('.filter-option-inner-inner').addClass('selected');
      });


      /* ===============================================================
           TOGGLE ALTERNATIVE BILLING ADDRESS
        =============================================================== */
      $('#alternateAddressCheckbox').on('change', function () {
         let checkboxId = '#' + $(this).attr('id').replace('Checkbox', '');
         $(checkboxId).toggleClass('d-none');
      });


      /* ===============================================================
           DISABLE UNWORKED ANCHORS
        =============================================================== */
      $('a[href="#"]').on('click', function (e) {
         e.preventDefault();
      });

});


/* ===============================================================
     COUNTRY SELECT BOX FILLING
  =============================================================== */
$.getJSON('js/countries.json', function (data) {
    $.each(data, function (key, value) {
        let selectOption = "<option value='" + value.name + "' data-dial-code='" + value.dial_code + "'>" + value.name + "</option>";
        $("select.country").append(selectOption);
    });
})
