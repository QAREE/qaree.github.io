var sld = {
        0 : {
            bg: "https://th.bing.com/th/id/OIP.79KlMiEE7xxmn-erdBwPCQHaEo?w=256&h=180&c=7&o=5&pid=1.7",
            txt: "اللغة العربية هي أحد اكثر اللغات السامية المنتشرة في بلاد العالم، وتعتبر هي اللغة الرسمية في جميع بلدان الوطن العربي 1",
            atxt: "هنا",
            lnk: "./index.html#s0",
        },
        1 : {
            bg: "https://th.bing.com/th/id/OIP.IwNxwoWIv1u0EKDEbvXXywHaE8?w=264&h=180&c=7&o=5&pid=1.7",
            txt: " الكتاب يمدّ القارئ بكمّيّة هائلة من الكلمات والمصطلحات",
            atxt: "هنا",
            lnk: "./index.html#s1",
        },
        2 : {
            bg: "https://th.bing.com/th/id/OIP.2PZrKOxmCgnEqT6zeCwYRgHaE9?w=264&h=180&c=7&o=5&pid=1.7",
            txt: " سيجد القارئ في الكتب تفاصيل ثقافات دول مختلفة، بواسطة الوصف أو الصور والرسومات المرفقة والتي تدعم الرؤية الواضحة لأقوام ربما لن يستطيع رؤيتهم في أي مكان آخر.",
            atxt: "هنا",
            lnk: "./index.html#f",
        },
    },
    sldElmnt = `<div>\n<div>\n</div>\n<div>\n<span>\n\n</span>\n<a>\n\n</a>\n</div>\n</div>`,
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
    document.getElementsByClassName("sld-slds")[0].children[i].children[0].setAttribute("id", "h_0_1_0_" + i + "_1");
    document.getElementsByClassName("sld-slds")[0].children[i].children[1].setAttribute("id", "h_0_1_0_" + i + "_0");
    document.getElementsByClassName("sld-slds")[0].children[i].children[1].children[0].setAttribute("id", "h_0_1_0_" + i + "_0_0");
    document.getElementsByClassName("sld-slds")[0].children[i].children[1].children[1].setAttribute("id", "h_0_1_0_" + i + "_0_1");
    
    document.getElementsByClassName("sld-pints")[0].innerHTML += pintElmnt;
    document.getElementsByClassName("sld-pints")[0].children[i].setAttribute("class", "sld-pint");
    document.getElementsByClassName("sld-pints")[0].children[i].setAttribute("id", "h_0_2_0_" + i);
    document.getElementsByClassName("sld-pints")[0].children[i].children[0].setAttribute("id", "h_0_2_0_" + i + "_0");
    // take from object
    document.getElementsByClassName("sld-slds")[0].children[i].style.backgroundImage = "url(\"" + sld[i].bg + "\")";
    document.getElementsByClassName("sld-slds")[0].children[i].children[1].children[0].textContent = sld[i].txt;
    document.getElementsByClassName("sld-slds")[0].children[i].children[1].children[1].textContent = sld[i].atxt;
    document.getElementsByClassName("sld-slds")[0].children[i].children[1].children[1].setAttribute("href", sld[i].lnk);
    // responsive
    setInterval(() => {
        document.getElementsByClassName("sld-slds")[0].style.width = wth + "%";
        document.getElementsByClassName("sld-slds")[0].style.height = window.innerHeight + "px";
        document.getElementsByClassName("sld-slds")[0].children[i].children[1].style.margin = -1 * (window.innerHeight + document.getElementsByClassName("sld-slds")[0].children[i].children[1].clientHeight) / 2 + "px auto 0 auto";
        document.getElementsByClassName("sld-slds")[0].children[i].children[0].style.height = window.innerHeight + "px";

        document.getElementsByClassName("sld-pints")[0].style.top = (document.getElementsByClassName("sld-slds")[0].clientHeight - document.getElementsByClassName("sld-pints")[0].clientHeight) + "px";
        document.getElementsByClassName("sld-pints")[0].style.width = (document.getElementsByClassName("sld-pints")[0].children[0].clientWidth * slds) + "px";
        document.getElementsByClassName("sld-pints")[0].style.margin = "0 " + (window.innerWidth - document.getElementsByClassName("sld-pints")[0].clientWidth) / 2 + "px";
    }, 0);
    document.getElementsByClassName("sld-pints")[0].children[0].children[0].style.fill = "rgba(2, 32, 57, 1)";
};
// auto slide show
var sldShwAt = setInterval(() => {
    for (let i = 0; i < pints; i++) {
        document.getElementsByClassName("sld-pints")[0].children[i].children[0].style.fill = "rgba(238, 226, 208, 1)";
    };
    if (lsld == slds && lpint == pints) {
        lsld = 0;
        lpint = 0;
        document.getElementsByClassName("sld-slds")[0].style.margin = "0 " + (document.getElementsByClassName("sld-slds")[0].children[lsld].clientWidth) * (-1 * lsld) + "px " + "0 0";
        document.getElementsByClassName("sld-pints")[0].children[lpint].children[0].style.fill = "rgba(2, 32, 57, 1)";
    } else {
        document.getElementsByClassName("sld-slds")[0].style.margin = "0 " + (document.getElementsByClassName("sld-slds")[0].children[lsld].clientWidth) * (-1 * lsld++) + "px " + "0 0";
        document.getElementsByClassName("sld-pints")[0].children[lpint++].children[0].style.fill = "rgba(2, 32, 57, 1)";
    };
}, 2000);