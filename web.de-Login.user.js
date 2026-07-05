// ==UserScript==
// @name         web.de-Login
// @namespace    http://tampermonkey.net/
// @version      25.0
// @icon         https://i.imgur.com/GbIXQZ2.png
// @description  Automatischer Login und Weiter-Klick auf millionenklick.web.de
// @author       Franz
// @match        *://millionenklick.web.de/*
// @run-at       document-idle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function () {
    'use strict';

    const warten = (ms) => new Promise(auflösen => setTimeout(auflösen, ms));

    function eingabewertSetzen(el, wert) {
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(el, wert);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function elementKlicken(el) {
        const rahmen = el.getBoundingClientRect();
        const x = rahmen.left + rahmen.width / 2;
        const y = rahmen.top + rahmen.height / 2;
        const ziel = document.elementFromPoint(x, y) || el;
        ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(typ => {
            ziel.dispatchEvent(new MouseEvent(typ, { bubbles: true, cancelable: true, clientX: x, clientY: y }));
        });
    }

    async function zugangsdatenHolen() {
        let benutzername = GM_getValue('wde_user', '');
        let passwort = GM_getValue('wde_pass', '');
        if (!benutzername || !passwort) {
            benutzername = prompt('Benutzername (wird für das nächste Mal gespeichert):');
            passwort = prompt('Passwort (wird für das nächste Mal gespeichert):');
            if (!benutzername || !passwort) return null;
            GM_setValue('wde_user', benutzername);
            GM_setValue('wde_pass', passwort);
        }
        return { benutzername, passwort };
    }

    async function starten() {
        const url = window.location.href;

        // === PHASE 1: Login-Seite — Felder ausfüllen und Login klicken ===
        const benutzerfeld = document.getElementById('mioklickuser');
        if (benutzerfeld) {
            const passwortfeld = document.getElementById('mioklickpassword');
            const loginKnopf = document.getElementById('login');

            const zugangsdaten = await zugangsdatenHolen();
            if (!zugangsdaten) return;

            eingabewertSetzen(benutzerfeld, zugangsdaten.benutzername);
            eingabewertSetzen(passwortfeld, zugangsdaten.passwort);
            await warten(300);

            console.log('[web.de] Klick auf Login');
            sessionStorage.setItem('wde_phase', 'weiter');
            elementKlicken(loginKnopf);
            return;
        }

        // === PHASE 2: Auf /spielen — Weiter klicken ===
        if (url.includes('/spielen')) {
            if (sessionStorage.getItem('wde_phase') !== 'weiter') return;

            await warten(1000);
            const weiterKnopf = document.getElementById('weiter');
            if (weiterKnopf) {
                console.log('[web.de] Klick auf Weiter');
                elementKlicken(weiterKnopf);
                sessionStorage.setItem('wde_phase', 'fertig');
            } else {
                console.warn('[web.de] Weiter-Schaltfläche nicht gefunden');
            }
            return;
        }

        // === Zurücksetzen ===
        if (sessionStorage.getItem('wde_phase') === 'fertig') {
            sessionStorage.removeItem('wde_phase');
        }
    }

    starten();

})();
