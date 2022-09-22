import React, { useEffect } from 'react'
import './BlastText.css'
import $ from 'jquery'
import Blast from 'blast-vanilla'

const BlastText = ({ text }) => {

    useEffect(() => {
        new Blast('.blast-root', {
            returnGenerated: true,
            delimiter: 'character',
            search: false,
            customClass: '',
            aria: true,
            debug: false,
            name: 'blast'
        })

        let a = 0;

        $(`.principal .blast`).each(function () {
            if (a === 300) {
                a = 400;
            }

            if (a === 1200) {
                a = 1400;
            }

            var el = $(this);

            el.addClass("animated bounceIn");

            if (a < 1200) {
                a = a + 50;
            } else {
                a = a + 35;
            }
        });

        $(`.principal .blast`).removeClass("animated bounceIn");
        $(`.principal .blast`).css("opacity", 1);

        $(`.principal .blast`).mouseenter(function () {
            var el = $(this);

            $(this).addClass("animated rubberBand");
            $(this).one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    el.removeClass("animated rubberBand");
                }
            );
        });


        setTimeout(function () {
            $(`.principal .flat-button`).addClass("animated bounceIn");
            $(`.principal .flat-button`).one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    $(`.principal .flat-button`).removeClass("animated bounceIn");
                    $(`.principal .flat-button`).css("opacity", 1);
                }
            );
        }, 2000);

        $(`.principal .flat-button`).mouseenter(function () {
            var el = $(this);

            $(this).addClass("animated rubberBand");
            $(this).one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function () {
                    el.removeClass("animated rubberBand");
                }
            );
        });
    }, [])


    return (
        <>
            {text === 'home' && (
                <h1 aria-label={text} className="blast-root">
                    Compará<br />las mejores<br />opciones
                </h1>
            )}

            {text === 'comparador' && (
                <h1 aria-label={text} className="blast-root">
                    Compará<br />ahora
                </h1>
            )}

            {text === 'about' && (
                <h1 aria-label={text} className="blast-root">
                    ¡Hola!<br />somos Blink
                </h1>
            )}

            {text === 'novedades' && (
                <h1 aria-label={text} className="blast-root">
                    Novedades
                </h1>
            )}

            {text === 'faq' && (
                <h1 aria-label={text} className="blast-root">
                    ¿Tenés<br />preguntas?
                </h1>
            )}
        </>

    )
}

export default BlastText