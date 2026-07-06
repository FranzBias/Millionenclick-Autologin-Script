# Millionenclick Autologin Script

## A Tampermonkey (or a similar userscript manager) userscript

## 🇩🇪 Deutsch

### Beschreibung

Dieses Script automatisiert den Login-Prozess auf [millionenklick.web.de](https://millionenklick.web.de) und klickt automatisch auf den „Weiter"-Button nach dem Login.

### Funktionen

- **Automatisches Ausfüllen** der Login-Felder (Benutzername und Passwort)
- **Automatischer Klick** auf den „Login"-Button
- **Automatischer Klick** auf den „Weiter"-Button nach dem Login
- **Einmalige Eingabe** der Zugangsdaten — werden gespeichert und beim nächsten Mal automatisch verwendet

### ⚠️ Bekannte Einschränkungen

Der Klick auf das **Sponsor-Banner** (`sample-banner`) konnte **nicht automatisiert** werden.

Der Grund: Der Browser blockiert synthetische (script-generierte) Klicks auf externe Werbebanner aus Sicherheitsgründen. Die Funktion `forcedclick()` der Seite erfordert ein sogenanntes *Trusted Event* — also einen echten Mausklick des Benutzers. Dieses Verhalten kann mit Tampermonkey nicht umgangen werden.

**Das Banner muss daher manuell geklickt werden.**

### Zugangsdaten — Speicherung & Sicherheit

Die Zugangsdaten (Benutzername und Passwort) werden über die Tampermonkey-API gespeichert:

- Gespeichert mit: `GM_setValue` / `GM_getValue`
- Speicherort: interner Tampermonkey-Datenspeicher (isoliert vom Browser)
- **Verschlüsselung:** Die Daten werden von Tampermonkey intern verwaltet und sind nicht im Klartext im localStorage oder in Cookies zugänglich. Sie sind jedoch **nicht stark verschlüsselt** — wer Zugriff auf die Tampermonkey-Erweiterungsdaten hat, könnte sie theoretisch einsehen. Auf einem persönlichen, nicht geteilten Computer ist das Risiko gering.

> ⚠️ Teilen Sie das Skript **niemals** mit eingetragenen Zugangsdaten.

### Zugangsdaten zurücksetzen

Um die gespeicherten Zugangsdaten zu löschen, öffnen Sie die **Browser-Konsole** (F12 → Konsole) auf der Seite `millionenklick.web.de` und führen Sie aus:

```javascript
GM_setValue('wde_user', ''); GM_setValue('wde_pass', '');
```

Beim nächsten Seitenaufruf werden Sie erneut nach Benutzername und Passwort gefragt.

### Installation

1. Firefox mit installierter [Tampermonkey-Erweiterung](https://www.tampermonkey.net/) öffnen
2. Tampermonkey-Dashboard öffnen → „Neues Skript erstellen"
3. Den Skript-Inhalt einfügen und speichern
4. Die Seite [https://millionenklick.web.de/?0](https://millionenklick.web.de/?0) aufrufen
5. Beim ersten Start: Benutzername und Passwort eingeben (werden gespeichert)

### Ablauf

```
1. Seite laden → Felder automatisch ausfüllen
2. Automatischer Klick auf „Login"
3. Weiterleitung zu /spielen
4. Automatischer Klick auf „Weiter"
5. ⚠️ Banner manuell klicken (nicht automatisierbar)
```

---

## 🇬🇧 English

### Description

This Script automates the login process on [millionenklick.web.de](https://millionenklick.web.de) and automatically clicks the „Weiter" (Continue) button after login.

### Features

- **Automatic form filling** of login fields (username and password)
- **Automatic click** on the „Login" button
- **Automatic click** on the „Weiter" button after login
- **One-time credential entry** — credentials are saved and reused automatically on subsequent visits

### ⚠️ Known Limitations

The click on the **sponsor banner** (`sample-banner`) could **not be automated**.

The reason: browsers block synthetic (script-generated) clicks on external ad banners for security reasons. The page's `forcedclick()` function requires a so-called *Trusted Event* — an actual mouse click by the user. This behavior cannot be bypassed using Tampermonkey.

**The banner must therefore be clicked manually.**

### Credentials — Storage & Security

Login credentials (username and password) are stored using the Tampermonkey API:

- Stored with: `GM_setValue` / `GM_getValue`
- Storage location: Tampermonkey's internal data store (isolated from the browser)
- **Encryption:** The data is managed internally by Tampermonkey and is not accessible as plain text in localStorage or cookies. However, it is **not strongly encrypted** — anyone with access to the Tampermonkey extension data could theoretically read it. On a personal, non-shared computer the risk is low.

> ⚠️ Never share the script with credentials already entered.

### Resetting Credentials

To delete the saved credentials, open the **browser console** (F12 → Console) on the `millionenklick.web.de` page and run:

```javascript
GM_setValue('wde_user', ''); GM_setValue('wde_pass', '');
```

The next time you visit the page, you will be prompted to enter your username and password again.

### Installation

1. Open Firefox with the [Tampermonkey extension](https://www.tampermonkey.net/) installed
2. Open the Tampermonkey dashboard → „Create new script"
3. Paste the script content and save
4. Navigate to [https://millionenklick.web.de/?0](https://millionenklick.web.de/?0)
5. On first run: enter your username and password (they will be saved)

### Flow

```
1. Page loads → fields filled automatically
2. Automatic click on „Login"
3. Redirect to /spielen
4. Automatic click on „Weiter"
5. ⚠️ Banner must be clicked manually (cannot be automated)
```

### Requirements

- Firefox
- [Tampermonkey](https://www.tampermonkey.net/) extension

### Author

Franz

---

*Script version: 25.0*
