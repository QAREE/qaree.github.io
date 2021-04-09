var sld = {
        0 : {
            bg: "./",
            txt: "1",
            atxt: "اضغط هنا",
            lnk: "./",
        },
        1 : {
            bg: "./",
            txt: "2",
            atxt: "اضغط هنا",
            lnk: "./",
        },
        2 : {
            bg: "./",
            txt: "3",
            atxt: "اضغط هنا",
            lnk: "./",
        },
        3 : {
            bg: "./",
            txt: "4",
            atxt: "اضغط هنا",
            lnk: "./",
        },
        4 : {
            bg: "./",
            txt: "5",
            atxt: "اضغط هنا",
            lnk: "./",
        },
    },
    sldElmnt = `<div>\n<div>\n<span>\n\n</span>\n<a>\n</a>\n<div>\n<div>`,
    pintElmnt = `<div><svg id="h_0_2_0_0" viewBox="0 0 3000 3000"><path fill-rule="evenodd" d="M1500.000,0.000 C2328.427,0.000 3000.000,671.573 3000.000,1500.000 C3000.000,2328.427 2328.427,3000.000 1500.000,3000.000 C671.573,3000.000 0.000,2328.427 0.000,1500.000 C0.000,671.573 671.573,0.000 1500.000,0.000 Z"/></svg></div>`;
// slide creator
var wth = 0,
    lsld = 0,
    slds = 0,
    lpint = 0,
    pints = 0;
for (const i in sld) {
    wth = wth + 100;
    slds = Number(i) + 1;
    pints = Number(i) + 1;
};
for (const i in sld) {
    // create elements
    document.getElementsByClassName("sld-slds")[0].innerHTML += sldElmnt;
    document.getElementsByClassName("sld-slds")[0].children[i].setAttribute("class", "sld-sld");
    document.getElementsByClassName("sld-slds")[0].children[i].setAttribute("id", "h_0_1_0_" + i);
    document.getElementsByClassName("sld-slds")[0].children[i].children[0].setAttribute("id", "h_0_1_0_" + i + "_0");
    document.getElementsByClassName("sld-slds")[0].children[i].children[0].children[0].setAttribute("id", "h_0_1_0_" + i + "_0_0");
    document.getElementsByClassName("sld-slds")[0].children[i].children[0].children[1].setAttribute("id", "h_0_1_0_" + i + "_0_1");
    
    document.getElementsByClassName("sld-pints")[0].innerHTML += pintElmnt;
    document.getElementsByClassName("sld-pints")[0].children[i].setAttribute("class", "sld-pint");
    document.getElementsByClassName("sld-pints")[0].children[i].setAttribute("id", "h_0_2_0_" + i);
    document.getElementsByClassName("sld-pints")[0].children[i].setAttribute("id", "h_0_2_0_" + i + "_0");
    // take from object
    document.getElementsByClassName("sld-slds")[0].children[i].children[0].children[0].textContent = sld[i].txt;
    document.getElementsByClassName("sld-slds")[0].children[i].children[0].children[1].textContent = sld[i].atxt;
    document.getElementsByClassName("sld-slds")[0].children[i].children[0].children[1].setAttribute("href", sld[i].lnk);
    // responsive
    setInterval(() => {
        document.getElementsByClassName("sld-slds")[0].style.width = wth + "%";
        document.getElementsByClassName("sld-slds")[0].style.height = window.innerHeight + "px";
        document.getElementsByClassName("sld-slds")[0].children[i].children[0].style.margin = (window.innerHeight / 2) - (document.getElementsByClassName("sld-slds")[0].children[i].children[0].clientHeight) + "px auto";

        document.getElementsByClassName("sld-pints")[0].style.top = (document.getElementsByClassName("sld-slds")[0].clientHeight - document.getElementsByClassName("sld-pints")[0].clientHeight) + "px";
        document.getElementsByClassName("sld-pints")[0].style.width = (document.getElementsByClassName("sld-pints")[0].children[0].clientWidth * slds) + "px";
        document.getElementsByClassName("sld-pints")[0].style.margin = "0 " + (window.innerWidth - document.getElementsByClassName("sld-pints")[0].clientWidth) / 2 + "px";
    }, 0);
    document.getElementsByClassName("sld-pints")[0].children[0].children[0].style.fill = "#FFF";
};
// auto slide show
var sldShwAt = function () {
    for (let i = 0; i < pints; i++) {
        document.getElementsByClassName("sld-pints")[0].children[i].children[0].style.fill = "#000";
    };
    if (lsld == slds && lpint == pints) {
        lsld = 0;
        lpint = 0;
        document.getElementsByClassName("sld-slds")[0].style.margin = "0 " + (document.getElementsByClassName("sld-slds")[0].children[0].clientWidth) * (-1 * lsld) + "px " + "0 0";
        document.getElementsByClassName("sld-pints")[0].children[lpint].children[0].style.fill = "#FFF";
    } else {
        document.getElementsByClassName("sld-slds")[0].style.margin = "0 " + (document.getElementsByClassName("sld-slds")[0].children[0].clientWidth) * (-1 * lsld++) + "px " + "0 0";
        document.getElementsByClassName("sld-pints")[0].children[lpint++].children[0].style.fill = "#FFF";
    };
};
setInterval(sldShwAt, 2000);
(function () {
    clearInterval(sldShwAt, 1000);
})();