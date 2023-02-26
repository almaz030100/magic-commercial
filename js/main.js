document.addEventListener("DOMContentLoaded", () => {

    // Wow JS
    (function() {
        new WOW().init();
    }());

    // Section profit calculator
    (function() {
        let rangeInputs = document.querySelectorAll('input[type="range"]'),
            totalSums = document.querySelectorAll('[data-calcsum]'),
            a = document.querySelector('input[data-range="1"]'),
            b = document.querySelector('input[data-range="2"]'),
            c = document.querySelector('input[data-range="3"]'),
            d = document.querySelector('input[data-range="4"]'),
            inputValues = document.querySelectorAll('span[data-range]');

        rangeInputs.forEach(item => {
            item.addEventListener('input', () => {
                let sum = (a.value*20000) + (b.value*12000) + (c.value*15000) + (d.value*3000) * 0.55;
                let result = sum.toLocaleString('ru-RU');
                totalSums.forEach(item => {
                    item.innerHTML = `${result} ₽`;
                });

                inputValues.forEach(value => {
                    if (value.getAttribute('data-range') == item.getAttribute('data-range')) {
                        value.innerHTML = item.value;
                    }
                });
            });
        });


    }());


    // Fancybox settings
    (function() {
        Fancybox.bind("[data-fancybox]", {
            autoFocus: false,
            dragToClose: false
        });
    }());


    // Form validation
    (function() {
        $('form').each(function() {
            jQuery.validator.addMethod("checkMask", function (e, t) {
                return /.\d..\d{3}..\d{3}.\d{2}.\d{2}/g.test(e);
            });

            $(this).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    phone: {
                        required: true,
                        checkMask: true
                    },
                    email: {
                        required: true,
                        minlength: 2,
                        maxlength: 50,
                        email: true
                    }
                },
            });
        });

        let elements = document.querySelectorAll('input[name="phone"]');
        let maskOptions = {
            mask: '+{7} (000) 000-00-00',
            lazy: false
        };
        elements.forEach(element => {
            element.addEventListener('focus', () => {
                let mask = IMask(element, maskOptions);
            }); 
        });
    }());


    // Sliders
    (function() {
        new Splide('.program__slider', {
            arrows: true,
            pagination: false,
            perPage: 2,
            gap: '18px',
            breakpoints: {
                1199: {
                    perPage: 1,
                },
                991: {
                    pagination: true
                },
                767: {
                    arrows: false
                }
            }
        }).mount();

        new Splide('.why__slider', {
            arrows: true,
            pagination: false,
            perPage: 2,
            gap: '17px',
            breakpoints: {
                1199: {
                    perPage: 1,
                    width: '780px'
                },
                991: {
                    arrows: false,
                    pagination: true,
                    gap: '100px'
                }
            }
        }).mount();

        new Splide('.promo__advantages', {
            arrows: false,
            pagination: true,
            gap: '100px',
            mediaQuery: 'min',
            width: '400px',
            type: 'loop',
            breakpoints: {
                992: {
                    destroy: true
                }
            }
        }).mount();
    }());


    // Показываем модальное окно при уходе со страницы
    (function() {
        function t() {
            Fancybox.show(
                [
                    {
                        src: '#modal3',
                    },
                ],
                {
                    autoFocus: false,
                    dragToClose: false
                }
            );
        }

        $(document).one("mouseleave", function (e) {
            $("#pageMain").length && e.clientY < 10 && t();
        });
    }());


    // Устанавливаем текущий год в футере
    (function() {
        let span = document.querySelectorAll('[data-year]');
        let year = new Date().getFullYear();
        span.forEach(item => {
            item.textContent = year;
        });
    }());

});