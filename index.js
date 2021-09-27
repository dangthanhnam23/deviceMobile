
(function () {
    const devicelist = [
        {
            value: null,
            height:null,
            content: "Chọn Device"
        },
        {
            value: "3840",
            height:"2160",
            content: "PC 4K"
        },
        {
            value: "2560",
            height:"1600",
            content: "PC 2560 x 1600"
        },
        {
            value: "2560",
            height:"1400",
            content: "PC 2560 x 1400"
        },
        {
            value: "1920",
            height:"1200",
            content: "PC 1920px x 1200"
        },
        {
            value: "1920",
            height:"1080",
            content: "PC 1920px x 1080px"
        },
        {
            value: "1200",
            height:"720",
            content: "PC 1200px"
        },
        {
            value: "768",
            height:"1024" ,
            content: "Ipad 768px"
        },
        {
            value: "1024",
            height:"1366" ,
            content: "Ipad Pro 1024px"
        },
        {
            value: "360",
            height: "640",
            content: "Moto G4 360px"
        },
        {
            value: "360",
            height: "640",
            content: "Galaxy S5 360px"
        },
        {
            value: "411",
            height: "731",
            content: "Pixel 2 411px"
        },
        {
            value: "411",
            height: "823",
            content: "Pixel 2 XL 411px"
        },
        {
            value: "320",
            height: "568",
            content: "IPHONE5/SE 320px"
        },
        {
            value: "375",
            height: "667",
            content: "IPHONE6/7/8 375px"
        },
        {
            value: "414",
            height: "736",
            content: "IPHONE6/7/8 PLUS 414px"
        },
        {
            value: "375",
            height: "812",
            content: "IPHONE X 375px"
        },
        {
            value: "540",
            height: "720",
            content: "Surface Duo 540px"
        },
        {
            value: "280",
            height:"653",
            content: "Galaxy Fold 280px"
        },
    
    ]
    const $ = document.querySelector.bind(document)
    const c = document.createElement.bind(document)
    const body = $("body")
    const html = $("html");;
    let bodywidth;
    const devicebody = c("div");
    devicebody.className = "device-body";
    const device = c("div");
    device.className = "device";
    device.style = 'position:absolute;bottom: 0;left: 0;width: 100%'
    const label = c("label");
    label.setAttribute("for", "devicemobile");
    label.innerText = "device Mobile App";
    const select = c("select");
    select.name = "devicemobile";
    select.id = "devicemobile";
    for (let i = 0; i < devicelist.length; i++) {
        console.log(i);
        item = devicelist[i];
        var option = document.createElement("option");
        option.value = i;
        option.innerText = item.content;
        select.appendChild(option);
    }
    device.appendChild(label);
    device.appendChild(select);
    devicebody.appendChild(body);
    html.appendChild(devicebody);
    html.appendChild(device);
    body.style = 'margin : 0 ; padding : 0;'
    bodywidth = body.clientWidth;
    select.onchange = function () {
        const widthdevice = devicelist[select.value].value * 1;
        const heightdevice = devicelist[select.value].height * 1;
        let phantram = widthdevice / bodywidth;
        phantram = phantram.toFixed(5);
        let phantramzoom = 100 / phantram;
        let stylebody = `zoom:${phantramzoom + "%"}; overflow:auto;border-bottom: 1px solid;height:${heightdevice}px; margin:0;padding:0;`;
        widthdevice < bodywidth ? stylebody += `width:${widthdevice}px;zoom:90%;border-right:1px solid` : "";
        body.style = stylebody;
    }
    const meta = '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">'
    const head = document.querySelector("head");
    head.innerHTML += meta;
})();