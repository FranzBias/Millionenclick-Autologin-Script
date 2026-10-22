// ==UserScript==
// @name         web.de-Login
// @name:de      web.de-Login
// @name:en      web.de Login
// @namespace    http://tampermonkey.net/
// @version      26.0
// @icon         https://i.imgur.com/GbIXQZ2.png
// @description     Automatic login and "Weiter" click on millionenklick.web.de
// @description:de  Automatischer Login und Klick auf „Weiter" bei millionenklick.web.de
// @description:en  Automatic login and "Weiter" click on millionenklick.web.de
// @author       Francesco (FranzBias)
// @license      MIT
// @homepageURL  https://github.com/FranzBias/Millionenclick-Autologin-Script
// @supportURL   https://github.com/FranzBias/Millionenclick-Autologin-Script/issues
// @match        *://millionenklick.web.de/*
// @run-at       document-idle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

/*
 * WHY this script exists:
 * Logging in to millionenklick.web.de every day means typing the same
 * credentials and pressing the same two buttons. This script fills the
 * login form, clicks "Login" and then "Weiter" on /spielen.
 * The sponsor banner cannot be automated: the page requires a trusted
 * (real) user click, which no userscript can fake.
 *
 * v26.0: Tampermonkey menu entry to reset the saved credentials
 * (no more F12 console), English code, @license and homepage in the header.
 * Storage keys and @namespace are unchanged, so v25 installs update
 * cleanly and saved credentials keep working.
 */

(function () {
    'use strict';

    const KEY_USER = 'wde_user';
    const KEY_PASS = 'wde_pass';
    const KEY_PHASE = 'wde_phase';

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Menu entry in the Tampermonkey icon: forget the saved credentials.
    GM_registerMenuCommand('🔑 Zugangsdaten zurücksetzen / Reset credentials', () => {
        GM_setValue(KEY_USER, '');
        GM_setValue(KEY_PASS, '');
        sessionStorage.removeItem(KEY_PHASE);
        alert('Zugangsdaten gelöscht. Beim nächsten Login werden sie neu abgefragt.\n'
            + 'Credentials deleted. You will be asked again at the next login.');
    });

    // Set an input value the way React-like pages expect it.
    function setInputValue(el, value) {
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(el, value);
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // Simulate a full mouse click in the middle of the element.
    function clickElement(el) {
        const box = el.getBoundingClientRect();
        const x = box.left + box.width / 2;
        const y = box.top + box.height / 2;
        const target = document.elementFromPoint(x, y) || el;
        ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(type => {
            target.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true, clientX: x, clientY: y }));
        });
    }

    async function getCredentials() {
        let username = GM_getValue(KEY_USER, '');
        let password = GM_getValue(KEY_PASS, '');
        if (!username || !password) {
            username = prompt('Benutzername (wird für das nächste Mal gespeichert):');
            password = prompt('Passwort (wird für das nächste Mal gespeichert):');
            if (!username || !password) return null;
            GM_setValue(KEY_USER, username);
            GM_setValue(KEY_PASS, password);
        }
        return { username, password };
    }

    async function start() {
        const url = window.location.href;

        // === PHASE 1: login page — fill in the fields and click Login ===
        const userField = document.getElementById('mioklickuser');
        if (userField) {
            const passwordField = document.getElementById('mioklickpassword');
            const loginButton = document.getElementById('login');

            const credentials = await getCredentials();
            if (!credentials) return;

            setInputValue(userField, credentials.username);
            setInputValue(passwordField, credentials.password);
            await wait(300);

            console.log('[web.de] Click on Login');
            sessionStorage.setItem(KEY_PHASE, 'weiter');
            clickElement(loginButton);
            return;
        }

        // === PHASE 2: on /spielen — click Weiter ===
        if (url.includes('/spielen')) {
            if (sessionStorage.getItem(KEY_PHASE) !== 'weiter') return;

            await wait(1000);
            const continueButton = document.getElementById('weiter');
            if (continueButton) {
                console.log('[web.de] Click on Weiter');
                clickElement(continueButton);
                sessionStorage.setItem(KEY_PHASE, 'fertig');
            } else {
                console.warn('[web.de] "Weiter" button not found');
            }
            return;
        }

        // === Reset the phase once the round is over ===
        if (sessionStorage.getItem(KEY_PHASE) === 'fertig') {
            sessionStorage.removeItem(KEY_PHASE);
        }
    }

    start();

})();
