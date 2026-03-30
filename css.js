const b_top = HtmlService.createHtmlOutput(`<base target="_top" />`);
const utf_8 = HtmlService.createHtmlOutput(`<meta charset="UTF-8" />`);
const xuacompatible = HtmlService.createHtmlOutput(
  `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`,
);
const viewport = HtmlService.createHtmlOutput(
  `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
);
const google_signin_client = HtmlService.createHtmlOutput(
  `<meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id" />`,
);
const fontAwesome = HtmlService.createHtmlOutput(
  `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />`,
);
const googleApis_preConnect = HtmlService.createHtmlOutput(
  `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
);
const gstatic_preConnect = HtmlService.createHtmlOutput(
  `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
);
const googleApisCss = HtmlService.createHtmlOutput(
  `<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet" />`,
);
const materializeCss = HtmlService.createHtmlOutput(
  `<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" />`,
);
const tabulatorCss = HtmlService.createHtmlOutput(
  `<link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet" />`,
);
const googleApisIcon = HtmlService.createHtmlOutput(
  `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />`,
);
const google_charts_loader = HtmlService.createHtmlOutput(
  `<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>`,
);
const googleApisOnApiLoad = HtmlService.createHtmlOutput(
  `<script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>`,
);
const googleApis_defer = HtmlService.createHtmlOutput(
  `<script async="" defer="" src="https://apis.google.com/js/platform.js"></script>`,
);
const desktopContainer = HtmlService.createHtmlOutput(
  `@media (min-width: 901px) {.desktop-container {width: 85%;margin: 0 auto;};.responsive-section {width: 85%;margin: 20 auto;}}`,
);
const mobileSection = HtmlService.createHtmlOutput(
  `@media (max-width: 900px) {.mobile-section {padding: 10px};.responsive-section {padding: 10px;} .menu-icon {display: none;} .sidebar {display: none;} .container .large-container {padding-left: 5%;padding-right: 5%;} .nav-right img {display: none;} .nav-right .user-icon  {display: block;width: 30px;} .nav-middle .search-box input {width: 100px;} .nav-middle .mic-icon {display: none;} .logo {width: 90px;}}`,
);
const article = HtmlService.createHtmlOutput(
  `article {background-color: white;margin-top: 5px;padding: 10px 15px;color: black;}`,
);
const aside = HtmlService.createHtmlOutput(
  `aside {background-color: #bbbbbb;padding: 20px;margin-top: 10px;}`,
);
const block_display = HtmlService.createHtmlOutput(
  `article, aside, footer, header, nav, main, section {display: block;}`,
);
const body = HtmlService.createHtmlOutput(
  `body {background-image: url("https://flewis21.github.io/foobar/images/user.jpg");width: 1080px;margin-left: auto;margin-right: auto;border-radius: 0.5px;background-color: #f0f0f0;font-family: Helvetica, Arial, sans-serif;font-size: 15px;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;background-position: center; }`,
);
const body_survey_player = HtmlService.createHtmlOutput(
  `body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;}`,
);
const body_unset = HtmlService.createHtmlOutput(
  `body, div, th, td{margin: 0.5px 0.5px 0.5px 0.5px !important; /* Remove default margin */width: 100% !important;}`,
);
const div_oddchances = HtmlService.createHtmlOutput(
  `div #content01 {clear: both;overflow-y: auto;overflow-x: hidden;text-align: center;}`,
);
const figcaption = HtmlService.createHtmlOutput(
  `figcaption {color: white;text-align: center;user-select: none;}`,
);
const footer = HtmlService.createHtmlOutput(
  `footer {clear: both;background-color: #20416c;color: white;padding: 5px 20px;}`,
);
const header = HtmlService.createHtmlOutput(
  `header {background-color:rgba(255,255,255,.1);color: #a7e1ee;font-size: smaller;}`,
);
const header_h1 = HtmlService.createHtmlOutput(
  `header h1 {font-family: "Montserrat", cursive;margin-left: 15px;}`,
);
const html = HtmlService.createHtmlOutput(`html,body {height: 100%;}`);
const img = HtmlService.createHtmlOutput(`img {width: 160px;cursor: pointer;}`);
const link_all = HtmlService.createHtmlOutput(
  `a {text-decoration: none;color: #5a5a5a;}`,
);
const link_active = HtmlService.createHtmlOutput(
  `a:hover,a:active {color: white !important;text-decoration: none !important;}`,
);
const link_visited = HtmlService.createHtmlOutput(
  `a:link,a:visited {color: black !important;}`,
);
const list_item_link = HtmlService.createHtmlOutput(`li a {color: white;}`);
const main = HtmlService.createHtmlOutput(
  `main {height: 92%;margin-top: 10px;width: 100%;margin-bottom: 10px;}`,
);
const nav = HtmlService.createHtmlOutput(
  `nav {background-color: #20416c;padding: 10px 2%;justify-content: space-between;margin-top: 1px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);background: #fff;position: stactic;top: 0;z-index: 10;}`,
);
const nav_oddchances = HtmlService.createHtmlOutput(`nav {font-size: 30px;}`);
const section = HtmlService.createHtmlOutput(
  `section {background-color: #bbbbbb;margin-top: 10px;padding: 5px;}`,
);
const table_display = HtmlService.createHtmlOutput(
  `table {width: 100% !important; /* Example: set table width */border-collapse: separate !important; /* Override default collapse if present */border-spacing: 0 !important; /* Remove spacing between cells */}`,
);
const table_display_unset = HtmlService.createHtmlOutput(
  `table, thead, tbody, tr, th, td {all: unset !important; /* This is a powerful reset, removing all inherited and default styles */display: block !important; /* Treat all table elements as block-level to remove table-specific layout */}`,
);
const tableSummary_table = HtmlService.createHtmlOutput(
  `table.summary-table {text-align: right;}`,
);
const tbodySummary_table_tdNth_child1 = HtmlService.createHtmlOutput(
  `tbody.summary-table td:nth-child(1) {width: 277px;}`,
);
const tbodySummary_table_tdNth_child2 = HtmlService.createHtmlOutput(
  `tbody.summary-table td:nth-child(2) {width: 75px;}`,
);
const tbodySummary_table_tdNth_child3 = HtmlService.createHtmlOutput(
  `tbody.summary-table td:nth-child(3) {width: 25px;}`,
);
const td_display = HtmlService.createHtmlOutput(
  `vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;`,
);
const th_description = HtmlService.createHtmlOutput(
  `th.description {width: 180px;text-align: left;}`,
);
const th_price = HtmlService.createHtmlOutput(`th.price {width: 75px;}`);
const tr_display = HtmlService.createHtmlOutput(
  `tr {display: flex; /* Use flexbox for rows for more control */width: 100%;justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;margin: auto;}`,
);
const website = HtmlService.createHtmlOutput(
  `* {box-sizing: border-box;margin: 0;padding: 0;font-family: "Roboto", sans-serif;}`,
);
const banner_page_header = HtmlService.createHtmlOutput(
  `.banner {background-color: #11233b;color: white;padding: 10px 20px;width: 100%;}`,
);
const banner_img = HtmlService.createHtmlOutput(
  `.banner img {width: 100%;border-radius: 8px;}`,
);
const boiler_footer = HtmlService.createHtmlOutput(
  `.boiler-footer {clear: none;margin-top: 10px;height: 92%;}`,
);
const company_info = HtmlService.createHtmlOutput(
  `.company-info {margin-top: 5px;}`,
);
const container = HtmlService.createHtmlOutput(
  `.container {background: #f9f9f9;padding-left: 17%;padding-right: 2%;padding-top: 20px;padding-bottom: 20px;}`,
);
const contentSection = HtmlService.createHtmlOutput(
  `.content-section {padding: 20px;border: 1px solid #eee;margin-bottom: 20px}`,
);
const datepicker_day = HtmlService.createHtmlOutput(
  `.datepicker-day-button {color: #424242 !important; /* A dark gray. Using !important ensures it overrides Materialize defaults and your other styles. */}`,
);
const datepicker_table_td_istoday = HtmlService.createHtmlOutput(
  `.datepicker-table td.is-today .datepicker-day-button {color: #ff9800 !important; /* Example: orange for today's date */}`,
);
const datepicker_table_td_isselected = HtmlService.createHtmlOutput(
  `.datepicker-table td.is-selected .datepicker-day-button {color: white !important; /* Keep white if the selected background is dark */}`,
);
const datepicker_display_table = HtmlService.createHtmlOutput(
  `.datepicker-container table {/* Re-establish standard table display */display: table !important;width: 100% !important; /* Ensure it takes full width of its container */border-collapse: collapse !important; /* Standard table styling */}`,
);
const datepicker_display_thead = HtmlService.createHtmlOutput(
  `.datepicker-container thead {display: table-header-group !important;}`,
);
const datepicker_display_tbody = HtmlService.createHtmlOutput(
  `.datepicker-container tbody {display: table-row-group !important;}`,
);
const datepicker_display_tr = HtmlService.createHtmlOutput(
  `.datepicker-container tr {display: table-row !important;}`,
);
const datepicker_color =
  HtmlService.createHtmlOutput(`.datepicker-container .datepicker-day-button {color: #424242 !important;
 }`);
const datepicker_display = HtmlService.createHtmlOutput(
  `.datepicker-container th,.datepicker-container td {/* Re-establish table cell display */display: table-cell !important;/* Undo flex and reset padding/margin/border that your global rules removed */flex: none !important; /* Crucial to undo flex: 1 */padding: 0 !important; /* Materialize has its own padding for day buttons, often 0 for cell and padding on button */margin: 0 !important;border: none !important;vertical-align: middle !important; /* Standard for cells */text-align: center !important; /* Days of week and numbers are typically centered */}`,
);
const dotted_border = HtmlService.createHtmlOutput(
  `.dotted-border {border-bottom: dotted 2px;}`,
);
const fa_trash_canHover = HtmlService.createHtmlOutput(
  `.fa-trash-can:hover {transform: scale(1.2);}`,
);
const flex_column = HtmlService.createHtmlOutput(
  `.flex-column {display: flex;flex-direction: column;}`,
);
const flex_div = HtmlService.createHtmlOutput(
  `.flex-div {display: flex;align-items: center;}`,
);
const flex_row = HtmlService.createHtmlOutput(
  `.flex-row {display: flex;flex-direction: row;}`,
);
const float_left = HtmlService.createHtmlOutput(`.float-left {float: left;}`);
const float_right = HtmlService.createHtmlOutput(
  `.float-right {float: right;}`,
);
const grid = HtmlService.createHtmlOutput(
  `.grid {display: grid;grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));grid-column-gap: 16px;grid-row-gap: 30px;}`,
);
const large_container = HtmlService.createHtmlOutput(
  `.large-container {padding-left: 7%;}`,
);
const list_container = HtmlService.createHtmlOutput(
  `.list-container {margin-top: 15px;}`,
);
const menu = HtmlService.createHtmlOutput(
  `.menu {flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;}`,
);
const menu_img = HtmlService.createHtmlOutput(
  `.menu-img {border-radius: 50%;max-width: 100%;height: auto;display: block;margin: auto;}`,
);
const menu_item = HtmlService.createHtmlOutput(
  `.menu-item {flex-flow:column nowrap;flex-basis: auto;flex-shrink: 0;margin: 5px;background: rgba(255, 255, 255, .05);width: 150px;}`,
);
const menu_itemHover = HtmlService.createHtmlOutput(
  `.menu-item:hover>.menu-img {transform: scale(1.03);}`,
);
const menu_payment = HtmlService.createHtmlOutput(
  `.menu-payment {background: rgba(255, 255, 255, .05);flex-grow: 1;z-index: 0;}`,
);
const nav_left_menu_ico = HtmlService.createHtmlOutput(
  `.nav-left .menu-icon {width: 22px;margin-right: 25px;}`,
);
const nav_left_logo = HtmlService.createHtmlOutput(
  `.nav-left .logo {width: 30px;}`,
);
const nav_middle = HtmlService.createHtmlOutput(``);
const nav_middle_mic_ico = HtmlService.createHtmlOutput(
  `.nav-middle .mic-icon {width: 16px;}`,
);
const nav_middle_search_box = HtmlService.createHtmlOutput(
  `.nav-middle .search-box {border: 1px solid #ccc;margin-right: 15px;padding: 8px 12px;border-radius: 25px;}`,
);
const nav_middle_search_box_img = HtmlService.createHtmlOutput(
  `.nav-middle .search-box img {width: 15px;}`,
);
const nav_middle_search_box_input = HtmlService.createHtmlOutput(
  `.nav-middle .search-box input {width: 50%;border: 0;outline: 0;background: transparent;}`,
);
const nav_right_img = HtmlService.createHtmlOutput(
  `.nav-right img {width: 25px;margin-right: 25px;}`,
);
const nav_right_user_ico = HtmlService.createHtmlOutput(
  `.nav-right .user-icon {width: 35px;border-radius: 50%;margin-right: 0;}`,
);
const order = HtmlService.createHtmlOutput(
  `.order {background-color: white;flex: 0 0 440px;overflow: auto;}`,
);
const order_menu_payment = HtmlService.createHtmlOutput(
  `.order,.menu-payment {border: solid .5px;border-radius: 10px;margin: 0px 10px 5px 10px;height: 100%;max-height: 100%;}`,
);
const quantity_price_subtotal_delete = HtmlService.createHtmlOutput(
  `.quantity,.price,.subtotal,.delete {text-align: right;}`,
);
const receipt = HtmlService.createHtmlOutput(
  `.receipt {border: solid .5px;margin: 10px 15px 5px 15px;box-shadow: 3px 3px 2px rgb(3,3,3);user-select: none;flex-grow: 1;}`,
);
const receipt_company_info_receipt_footer = HtmlService.createHtmlOutput(
  `.receipt,.company-info,.receipt-footer {align-items: center;}`,
);
const receipt_details = HtmlService.createHtmlOutput(
  `.receipt-details {margin-top: 10px;flex-grow: 1;}`,
);
const receipt_footer = HtmlService.createHtmlOutput(
  `.receipt-footer {padding-top: 20px;}`,
);
const receipt_blue_table_unset = HtmlService.createHtmlOutput(
  `.receipt table.striped.centered.highlight.responsive-table.grey.z-depth-5 table {all: unset !important;display: block !important;}`,
);
const receipt_unset = HtmlService.createHtmlOutput(
  `.receipt table.striped.centered.highlight.responsive-table.red.z-depth-5 table tr,.receipt table.striped.centered.highlight.responsive-table.blue.z-depth-5 table td {all: unset !important;display: block !important; /* Or display: flex for rows, display: block for cells */}`,
);
const responsiveSection = HtmlService.createHtmlOutput(
  `.responsive-section .container {width: 100%;padding: 0px}`,
);
const shortcuts_links_a_img = HtmlService.createHtmlOutput(
  `.shortcut-links a img {width: 20px;margin-right: 20px;}`,
);
const shortcuts_links_a = HtmlService.createHtmlOutput(
  `.shortcut-links a {display: flex;align-items: center;margin-bottom; 20px; width: fit-content;flex-wrap: wrap;}`,
);
const shortcuts_links_a_first_child = HtmlService.createHtmlOutput(
  `.shortcut-links a:first-child {color: #ed3833;}`,
);
const sidebar = HtmlService.createHtmlOutput(
  `.sidebar {background: #fff;width: 100%;height: 100vh;position: fixed;top: 0;padding-left: 2%;padding-top: 80px}`,
);
const sidebar_hr = HtmlService.createHtmlOutput(
  `.sidebar hr {border: 0;height: 1px;background: #ccc;width: 85%;}`,
);
const small_sidebar = HtmlService.createHtmlOutput(
  `.small-sidebar {width: 5%;}`,
);
const small_sidebar_link_paragraph = HtmlService.createHtmlOutput(
  `.small-sidebar a p {display: none;}`,
);
const small_sidebar_h3 = HtmlService.createHtmlOutput(
  `.small-sidebar h3 {display: none;}`,
);
const small_sidebar_hr = HtmlService.createHtmlOutput(
  `.small-sidebar hr {width: 50%;margin-bottom: 25px;}`,
);
const socials = HtmlService.createHtmlOutput(`.socials {width: 100%;}`);
const static_fix = HtmlService.createHtmlOutput(
  `.static-fix {position: sticky;}`,
);
const subscribed_list_h3 = HtmlService.createHtmlOutput(
  `.subscribed-list h3 {font-size: 13px;margin: 20px 0;color: #5a5a5a;}`,
);
const subscribed_list_link = HtmlService.createHtmlOutput(
  `.subscribed-list a {display: flex;align-items: center;margin-bottom: 20px;width: fit-content;flex-wrap: wrap;}`,
);
const subscribed_list_link_img = HtmlService.createHtmlOutput(
  `.subscribed-list a img {width: 25px;border-radius: 50%;margin-right: 20px;}`,
);
const toolbar = HtmlService.createHtmlOutput(
  `.toolbar {flex: 0 0 60px;justify-content: space-around;align-items: center;border: solid .5px;border-radius: 10px;margin: 0px 15px 5px 15px;}`,
);
const toolbar_icon = HtmlService.createHtmlOutput(
  `.toolbar-icon {font-size: 2rem;}`,
);
const toolbar_iconHover = HtmlService.createHtmlOutput(
  `.toolbar-icon:hover {transform: scale(1.2);}`,
);
const vid_info = HtmlService.createHtmlOutput(
  `.vid-info {color: #5a5a5a;font-size: 13px;}`,
);
const vid_info_link = HtmlService.createHtmlOutput(
  `.vid-info a {color: #000;font-weight: 600;display: block;margin-bottom: 5px;}`,
);
const vid_list_thumbnail = HtmlService.createHtmlOutput(
  `.vid-list .thumbnail {width: 100%;border-radius: 5px;}`,
);
const vid_list_flex_div = HtmlService.createHtmlOutput(
  `.vid-list .flex-div {align-items: flex-start;margin-top: 7px;}`,
);
const vid_list_flex_div_img = HtmlService.createHtmlOutput(
  `.vid-list .flex-div img {width: 35px;margin-right: 10px;border-radius: 50%;}`,
);
const barcode = HtmlService.createHtmlOutput(
  `#barcode {font-family: "Libre Barcode 128", cursive;font-size: 70px;margin-top: 10px;}`,
);
const company_name = HtmlService.createHtmlOutput(
  `#company-name {font-size: 1.5rem;}`,
);
const company_phone = HtmlService.createHtmlOutput(
  `#company-phone {font-size: 1.25rem;}`,
);
const jsoninput = HtmlService.createHtmlOutput(
  `#jsonInput {display: none;width: 100%;height: 8vh; /* Or whatever height you need */margin:10px auto;padding: 0px;box-sizing: border-box; /* Include padding in width/height */border:1px solid #ccc;font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'monospace'; /* Monospaced font is crucial */font-size: 14px;line-height: 1.5; /* Good for readability */white-space:pre-wrap;text-align:left;background-color: #282c34; /* Dark background common for code editors */color: #abb2bf; /* Light text color for contrast */resize: vertical; /* Allow vertical resizing, or 'none' to disable */overflow: auto; /* Enable scrolling if content exceeds height *//* Focus state */outline: none; /* Remove default blue outline on focus */box-shadow: 0 0 0 2px rgba(97, 175, 239, 0.5); /* Custom focus highlight */transition: box-shadow 0.2s ease-in-out;}`,
);
const indexbeta = HtmlService.createHtmlOutput(
  `#indexBeta,#player1,#player2 {/* Basic layout and appearance */width: 100%;height: 80vh; /* Or whatever height you need */font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'monospace'; /* Monospaced font is crucial */font-size: 14px;line-height: 1.5; /* Good for readability */margin:10px auto;white-space:pre-wrap;text-align:left;padding: 0px;box-sizing: border-box; /* Include padding in width/height */border: 1px solid #333;background-color: #282c34; /* Dark background common for code editors */color: #abb2bf; /* Light text color for contrast */resize: vertical; /* Allow vertical resizing, or 'none' to disable */overflow: auto; /* Enable scrolling if content exceeds height *//* Hide default textarea scrollbar (optional, but common for custom scrollbars) *//* If you hide this, you'd need to implement custom scrollbars with JavaScript *//* -webkit-overflow-scrolling: touch; */ /* For smooth scrolling on touch devices *//* &::-webkit-scrollbar { display: none; } *//* & { -ms-overflow-style: none; scrollbar-width: none; } *//* Focus state */outline: none; /* Remove default blue outline on focus */box-shadow: 0 0 0 2px rgba(97, 175, 239, 0.5); /* Custom focus highlight */transition: box-shadow 0.2s ease-in-out;}`,
);
const indexbeta_color_boxshadow = HtmlService.createHtmlOutput(
  `#indexBeta,#jsonInput,#player1,#player2:focus {box-shadow: 0 0 0 2px rgba(97, 175, 239, 0.8); /* More prominent on focus */}`,
);
const indexbeta_color = HtmlService.createHtmlOutput(
  `#indexBeta,#jsonInput,#player1,#player2:placeholder {color: #616e7f;}`,
);
const seperator2 = HtmlService.createHtmlOutput(
  `/* ----------------------------Menu-Payment-------------------------- */`,
);
const seperator1 = HtmlService.createHtmlOutput(
  `/* -----------------------------------ORDER--------------------------- */`,
);
const logo = HtmlService.createHtmlOutput(
  `https://flewis21.github.io/foobar/images/logo.jpg`,
);
const seaIcn = HtmlService.createHtmlOutput(
  `https://flewis21.github.io/foobar/images/user.jpg`,
);
const materializeJs = HtmlService.createHtmlOutput(
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`,
);
const luxonJs = HtmlService.createHtmlOutput(
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
);
const tabulatorJs = HtmlService.createHtmlOutput(
  `<script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>`,
);
const jsQuery = HtmlService.createHtmlOutput(
  `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`,
);
const google_script_run_promise = HtmlService.createHtmlOutput(`
  return new Promise((resolve, reject) => {
    google.script.run
    .withSuccessHandler(result => {
        resolve(result)})
    .withFailureHandler(error => {
        reject(error)})
    .runBoilerplate(func, args)
  })
`);
const collapse_menu = HtmlService.createHtmlOutput(`
  var menuIcon = document.querySelector(".menu-icon");
  var sidebar = document.querySelector(".sidebar");
  var container = document.querySelector(".container");
  menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
  } 
`);
const iframePlayer = HtmlService.createHtmlOutput(`function fPla() {
    const myObj = {
      appJS: function serverSide(func, args) {
        "use strict";
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.error(error);
              reject(error);
            })
            .runBoilerplate(func, args);
        });
      },
    };
    // Expose serverSide to the global scope or a specific namespace
    if (!window && !window.myApp) {
      window.myApp = {};
    }
    window.myApp.serverSide = myObj.appJS; // Or, if you have a namespace
    // : myApp.serverSide
    // = serverSide;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let iframePlayer;
    function onYouTubeIframeAPIReady() {
      iframePlayer = new YT.Player("iframePlayer", {
        height: "505",
        width: "585",
        //  videoId: 'OTeQee-gxa4',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          playsinline: 1,
          mute: 1,
          modestbranding: 1,
          vq: "hd1080",
          listType: "playlist",
          list: "UU6DOFpA9UCTgNwJiVX1IOpQ",
        },
        events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
      });
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      const done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          setTimeout(playVideo); // done
          // = true;
        }
      }
      function stopVideo() {
        iframePlayer.stopVideo();
      }
      function playVideo() {
        iframePlayer.playVideo();
      }
      function nextVideo() {
        iframePlayer.nextVideo();
      }
    }
    return myObj;
  }`);
const styleHtml = {
  renderFile: HtmlService.createHtmlOutput(
    `${desktopContainer.getContent() + mobileSection.getContent() + responsiveSection.getContent() + nav_middle_search_box_input.getContent() + nav_middle_search_box.getContent() + nav_left_menu_ico.getContent() + nav_left_logo.getContent() + nav_right_user_ico.getContent() + nav_right_img.getContent() + flex_div.getContent() + footer.getContent() + socials.getContent() + aside.getContent() + main.getContent() + article.getContent() + website.getContent() + banner_page_header.getContent() + banner_img.getContent() + img.getContent() + nav.getContent() + section.getContent() + body.getContent() + block_display.getContent() + receipt_footer.getContent() + receipt.getContent() + boiler_footer.getContent() + sidebar.getContent() + small_sidebar.getContent() + static_fix.getContent() + float_left.getContent() + float_right.getContent() + sidebar_hr.getContent() + small_sidebar_h3.getContent() + small_sidebar_hr.getContent() + small_sidebar_link_paragraph.getContent() + subscribed_list_h3.getContent() + subscribed_list_link.getContent() + subscribed_list_link_img.getContent() + container.getContent() + list_container.getContent() + grid.getContent() + vid_list_thumbnail.getContent() + vid_list_flex_div.getContent() + vid_list_flex_div_img.getContent() + vid_info.getContent() + vid_info_link.getContent() + menu.getContent() + order.getContent() + large_container.getContent()}`,
  ),
  surveyPlayer: HtmlService.createHtmlOutput(
    `${desktopContainer.getContent() + mobileSection.getContent() + responsiveSection.getContent() + receipt.getContent() + responsiveSection.getContent() + website.getContent() + body_survey_player.getContent() + nav.getContent()}`,
  ),
  oddChances: HtmlService.createHtmlOutput(
    `${link_visited.getContent() + link_active.getContent()}`,
  ),
};
