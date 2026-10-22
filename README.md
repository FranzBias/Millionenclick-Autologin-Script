# 🎰 Millionenclick Autologin

[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
![Made with love](https://img.shields.io/badge/made%20with-%E2%9D%A4%EF%B8%8F%20by%20Francesco-blueviolet)
![JavaScript](https://img.shields.io/badge/JavaScript-userscript-yellow?logo=javascript)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-compatible-black)
[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-586469-red)](https://greasyfork.org/scripts/586469-web-de-login)
![Version](https://img.shields.io/badge/version-26.0-blue)
[![Donate](https://img.shields.io/badge/Donate-PayPal-00457C?logo=paypal)](https://www.paypal.com/donate/?hosted_button_id=HUF5MYDG465RY)

**🌍 Languages:**
[English](#english) ·
[Italiano](#italiano) ·
[Deutsch](#deutsch) ·
[Español](#espanol) ·
[Français](#francais) ·
[Nederlands](#nederlands) ·
[Русский](#russkij) ·
[العربية](#arabic) ·
[中文](#chinese) ·
[日本語](#japanese)

---

<a id="english"></a>
## 🇬🇧 English

### What it does
A userscript that logs you in to [millionenklick.web.de](https://millionenklick.web.de) and clicks **"Weiter"** (Continue) for you. You type your credentials once; from then on the daily round is one page load.

### Features
- Fills in username and password and clicks **Login**
- Clicks **Weiter** on the `/spielen` page
- Credentials asked once and stored in Tampermonkey
- **New in 26.0:** menu entry *"🔑 Zugangsdaten zurücksetzen / Reset credentials"* in the Tampermonkey icon

### ⚠️ Known limitation
The **sponsor banner** cannot be clicked by a script: the page asks for a *trusted event*, a real click by a real finger. Browsers block synthetic clicks on external ads, and no userscript can get around that. **Click the banner yourself.**

### Credentials and security
Stored with `GM_setValue` in Tampermonkey's own data store — not in cookies or `localStorage`, but **not strongly encrypted** either. On a personal, unshared computer the risk is low. Never share a copy of your Tampermonkey data.

### Reset the credentials
Click the Tampermonkey icon on the site → **🔑 Zugangsdaten zurücksetzen / Reset credentials**. You will be asked again at the next login.

### Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/) (or Violentmonkey) in your browser.
2. Open the script on [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) and press **Install** — or create a new script in the dashboard and paste `web.de-Login.user.js`.
3. Go to [millionenklick.web.de/?0](https://millionenklick.web.de/?0) and enter your credentials the first time.

### Flow
```
1. Page loads → fields filled in
2. Click on "Login"
3. Redirect to /spielen
4. Click on "Weiter"
5. ⚠️ Banner: click it by hand
```

---

<a id="italiano"></a>
## 🇮🇹 Italiano

### Cosa fa
Uno userscript che ti fa entrare in [millionenklick.web.de](https://millionenklick.web.de) e preme **«Weiter»** (Avanti) al posto tuo. Le credenziali le scrivi una volta sola; da lì in poi il giro quotidiano è un caricamento di pagina.

### Funzioni
- Compila nome utente e password e clicca **Login**
- Clicca **Weiter** sulla pagina `/spielen`
- Credenziali chieste una volta e salvate in Tampermonkey
- **Novità della 26.0:** voce di menu *«🔑 Zugangsdaten zurücksetzen / Reset credentials»* nell'icona di Tampermonkey

### ⚠️ Limite noto
Il **banner dello sponsor** non si può cliccare da script: la pagina vuole un *trusted event*, un clic vero di un dito vero. I browser bloccano i clic sintetici sulle pubblicità esterne e nessuno userscript può aggirarlo. **Il banner va cliccato a mano.**

### Credenziali e sicurezza
Salvate con `GM_setValue` nell'archivio di Tampermonkey — non nei cookie né in `localStorage`, ma **non cifrate in modo forte**. Su un computer personale e non condiviso il rischio è basso.

### Azzerare le credenziali
Icona di Tampermonkey sul sito → **🔑 Zugangsdaten zurücksetzen / Reset credentials**. Al login successivo te le richiede.

### Installazione
1. Installa [Tampermonkey](https://www.tampermonkey.net/) (o Violentmonkey) nel browser.
2. Apri lo script su [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) e premi **Installa** — oppure crea un nuovo script nel pannello e incolla `web.de-Login.user.js`.
3. Vai su [millionenklick.web.de/?0](https://millionenklick.web.de/?0) e inserisci le credenziali la prima volta.

---

<a id="deutsch"></a>
## 🇩🇪 Deutsch

### Was es macht
Ein Userscript, das dich bei [millionenklick.web.de](https://millionenklick.web.de) anmeldet und für dich auf **„Weiter"** klickt. Die Zugangsdaten gibst du nur einmal ein; danach ist die tägliche Runde ein einziger Seitenaufruf.

### Funktionen
- Füllt Benutzername und Passwort aus und klickt auf **Login**
- Klickt auf der Seite `/spielen` auf **Weiter**
- Zugangsdaten werden einmal abgefragt und in Tampermonkey gespeichert
- **Neu in 26.0:** Menüeintrag *„🔑 Zugangsdaten zurücksetzen / Reset credentials"* im Tampermonkey-Symbol

### ⚠️ Bekannte Einschränkung
Das **Sponsor-Banner** lässt sich nicht per Skript anklicken: Die Seite verlangt ein *Trusted Event*, also einen echten Mausklick. Browser blockieren synthetische Klicks auf externe Werbung, das kann kein Userscript umgehen. **Das Banner bitte selbst anklicken.**

### Zugangsdaten und Sicherheit
Gespeichert mit `GM_setValue` im internen Speicher von Tampermonkey — nicht in Cookies oder im `localStorage`, aber auch **nicht stark verschlüsselt**. Auf einem persönlichen, nicht geteilten Rechner ist das Risiko gering.

### Zugangsdaten zurücksetzen
Tampermonkey-Symbol auf der Seite → **🔑 Zugangsdaten zurücksetzen / Reset credentials**. Beim nächsten Login wirst du erneut gefragt.

### Installation
1. [Tampermonkey](https://www.tampermonkey.net/) (oder Violentmonkey) im Browser installieren.
2. Das Skript auf [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) öffnen und **Installieren** drücken — oder im Dashboard ein neues Skript anlegen und `web.de-Login.user.js` einfügen.
3. [millionenklick.web.de/?0](https://millionenklick.web.de/?0) aufrufen und beim ersten Mal die Zugangsdaten eingeben.

---

<a id="espanol"></a>
## 🇪🇸 Español

### Qué hace
Un userscript que inicia sesión en [millionenklick.web.de](https://millionenklick.web.de) y pulsa **«Weiter»** (Continuar) por ti. Escribes tus credenciales una sola vez; después, la ronda diaria es una sola carga de página.

### Funciones
- Rellena usuario y contraseña y pulsa **Login**
- Pulsa **Weiter** en la página `/spielen`
- **Nuevo en 26.0:** entrada de menú *«🔑 Zugangsdaten zurücksetzen / Reset credentials»* en el icono de Tampermonkey

### ⚠️ Limitación conocida
El **banner del patrocinador** no se puede pulsar con un script: la página exige un *trusted event*, un clic real. **Púlsalo tú.**

### Credenciales
Guardadas con `GM_setValue` en el almacén de Tampermonkey, **sin cifrado fuerte**. Para borrarlas: icono de Tampermonkey → **🔑 Reset credentials**.

### Instalación
Instala [Tampermonkey](https://www.tampermonkey.net/), abre el script en [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) y pulsa **Instalar**; luego visita [millionenklick.web.de/?0](https://millionenklick.web.de/?0).

---

<a id="francais"></a>
## 🇫🇷 Français

### Ce qu'il fait
Un userscript qui vous connecte à [millionenklick.web.de](https://millionenklick.web.de) et clique sur **« Weiter »** (Continuer) à votre place. Vous saisissez vos identifiants une seule fois ; ensuite, la tournée quotidienne tient en un chargement de page.

### Fonctions
- Remplit l'identifiant et le mot de passe, clique sur **Login**
- Clique sur **Weiter** sur la page `/spielen`
- **Nouveau en 26.0 :** entrée de menu *« 🔑 Zugangsdaten zurücksetzen / Reset credentials »* dans l'icône de Tampermonkey

### ⚠️ Limite connue
La **bannière du sponsor** ne peut pas être cliquée par un script : la page exige un *trusted event*, un vrai clic. **Cliquez-la vous-même.**

### Identifiants
Stockés avec `GM_setValue` dans Tampermonkey, **sans chiffrement fort**. Pour les effacer : icône Tampermonkey → **🔑 Reset credentials**.

### Installation
Installez [Tampermonkey](https://www.tampermonkey.net/), ouvrez le script sur [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) et cliquez sur **Installer**, puis allez sur [millionenklick.web.de/?0](https://millionenklick.web.de/?0).

---

<a id="nederlands"></a>
## 🇳🇱 Nederlands

### Wat het doet
Een userscript dat je aanmeldt op [millionenklick.web.de](https://millionenklick.web.de) en voor je op **„Weiter"** (Verder) klikt. Je gegevens voer je één keer in; daarna is de dagelijkse ronde één paginalading.

### Functies
- Vult gebruikersnaam en wachtwoord in en klikt op **Login**
- Klikt op **Weiter** op de pagina `/spielen`
- **Nieuw in 26.0:** menu-item *„🔑 Zugangsdaten zurücksetzen / Reset credentials"* in het Tampermonkey-pictogram

### ⚠️ Bekende beperking
De **sponsorbanner** kan niet door een script worden aangeklikt: de pagina vraagt om een *trusted event*, een echte klik. **Klik hem zelf aan.**

### Inloggegevens
Opgeslagen met `GM_setValue` in Tampermonkey, **zonder sterke versleuteling**. Wissen: Tampermonkey-pictogram → **🔑 Reset credentials**.

### Installatie
Installeer [Tampermonkey](https://www.tampermonkey.net/), open het script op [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) en klik op **Installeren**; ga daarna naar [millionenklick.web.de/?0](https://millionenklick.web.de/?0).

---

<a id="russkij"></a>
## 🇷🇺 Русский

### Что делает
Пользовательский скрипт, который входит на [millionenklick.web.de](https://millionenklick.web.de) и сам нажимает **«Weiter»** (Далее). Данные для входа вводятся один раз; дальше ежедневный обход — это одна загрузка страницы.

### Возможности
- Заполняет имя пользователя и пароль и нажимает **Login**
- Нажимает **Weiter** на странице `/spielen`
- **Новое в 26.0:** пункт меню *«🔑 Zugangsdaten zurücksetzen / Reset credentials»* в значке Tampermonkey

### ⚠️ Известное ограничение
**Баннер спонсора** нельзя нажать скриптом: странице нужен *trusted event* — настоящий клик. **Нажмите его сами.**

### Данные для входа
Хранятся через `GM_setValue` в Tampermonkey, **без надёжного шифрования**. Удалить: значок Tampermonkey → **🔑 Reset credentials**.

### Установка
Установите [Tampermonkey](https://www.tampermonkey.net/), откройте скрипт на [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) и нажмите **Установить**, затем откройте [millionenklick.web.de/?0](https://millionenklick.web.de/?0).

---

<a id="arabic"></a>
## 🇸🇦 العربية

<div dir="rtl">

### ماذا يفعل
سكربت مستخدم يسجّل دخولك إلى [millionenklick.web.de](https://millionenklick.web.de) ويضغط زر **«Weiter»** (متابعة) نيابةً عنك. تُدخل بياناتك مرة واحدة فقط، وبعدها تصبح الجولة اليومية مجرد تحميل للصفحة.

### الميزات
- يملأ اسم المستخدم وكلمة المرور ويضغط **Login**
- يضغط **Weiter** في الصفحة `/spielen`
- **جديد في 26.0:** عنصر قائمة *«🔑 Zugangsdaten zurücksetzen / Reset credentials»* في أيقونة Tampermonkey

### ⚠️ قيد معروف
لا يمكن للسكربت الضغط على **لافتة الراعي**: تتطلب الصفحة *trusted event* أي نقرة حقيقية. **اضغطها بنفسك.**

### بيانات الدخول
تُحفظ عبر `GM_setValue` داخل Tampermonkey **دون تشفير قوي**. للحذف: أيقونة Tampermonkey ← **🔑 Reset credentials**.

### التثبيت
ثبّت [Tampermonkey](https://www.tampermonkey.net/)، افتح السكربت على [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) واضغط **تثبيت**، ثم افتح [millionenklick.web.de/?0](https://millionenklick.web.de/?0).

</div>

---

<a id="chinese"></a>
## 🇨🇳 中文

### 功能简介
一个用户脚本，可自动登录 [millionenklick.web.de](https://millionenklick.web.de) 并替你点击 **“Weiter”**（继续）。账号只需输入一次，之后每天只要打开页面即可。

### 功能
- 自动填写用户名和密码并点击 **Login**
- 在 `/spielen` 页面点击 **Weiter**
- **26.0 新增：** Tampermonkey 图标菜单中的 *“🔑 Zugangsdaten zurücksetzen / Reset credentials”*

### ⚠️ 已知限制
脚本无法点击 **赞助商横幅**：页面要求 *trusted event*，即真实的鼠标点击。**请手动点击。**

### 账号信息
通过 `GM_setValue` 保存在 Tampermonkey 中，**未经强加密**。清除方法：Tampermonkey 图标 → **🔑 Reset credentials**。

### 安装
安装 [Tampermonkey](https://www.tampermonkey.net/)，在 [Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) 打开脚本并点击 **安装**，然后访问 [millionenklick.web.de/?0](https://millionenklick.web.de/?0)。

---

<a id="japanese"></a>
## 🇯🇵 日本語

### できること
[millionenklick.web.de](https://millionenklick.web.de) に自動でログインし、**「Weiter」**（次へ）を代わりにクリックするユーザースクリプトです。認証情報の入力は一度だけ。あとは毎日ページを開くだけです。

### 機能
- ユーザー名とパスワードを入力して **Login** をクリック
- `/spielen` ページで **Weiter** をクリック
- **26.0 の新機能：** Tampermonkey アイコンのメニュー *「🔑 Zugangsdaten zurücksetzen / Reset credentials」*

### ⚠️ 既知の制限
**スポンサーバナー** はスクリプトではクリックできません。ページが *trusted event*（本物のクリック）を要求するためです。**手動でクリックしてください。**

### 認証情報
`GM_setValue` で Tampermonkey 内に保存されますが、**強力な暗号化はされていません**。削除：Tampermonkey アイコン → **🔑 Reset credentials**。

### インストール
[Tampermonkey](https://www.tampermonkey.net/) をインストールし、[Greasy Fork](https://greasyfork.org/scripts/586469-web-de-login) でスクリプトを開いて **インストール** を押し、[millionenklick.web.de/?0](https://millionenklick.web.de/?0) を開きます。

---

## Credits
- [Tampermonkey](https://www.tampermonkey.net/) and its `GM_*` API.
- Written by Francesco (FranzBias) with Aldus 🦉 — MIT License.

*Script version: 26.0*
