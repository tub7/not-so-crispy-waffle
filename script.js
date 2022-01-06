const img = document.querySelectorAll(".menu-img > img");

img.forEach((image) =>
    image.addEventListener("click", (e) => {
        if (image.classList.value === "") {
            const togle = document.getElementsByClassName("clicked");
            togle[0].classList.value = "";

            image.classList.add("clicked");

            const pic = document.querySelector("main > section > img");

            let num = image.getAttribute("value");
            switch (num) {
                case "1":
                    pic.setAttribute(
                        "src",
                        "./ecommerce-product-page-main/images/image-product-1.jpg"
                    );
                    break;
                case "2":
                    pic.setAttribute(
                        "src",
                        "./ecommerce-product-page-main/images/image-product-2.jpg"
                    );
                    break;
                case "3":
                    pic.setAttribute(
                        "src",
                        "./ecommerce-product-page-main/images/image-product-3.jpg"
                    );
                    break;
                case "4":
                    pic.setAttribute(
                        "src",
                        "./ecommerce-product-page-main/images/image-product-4.jpg"
                    );
                    break;
                default:
                    return;
            }
        }
    })
);

const cart = document.querySelector(".cart > :first-child");

cart.addEventListener("click", (e) => {
    const cartList = document.querySelector(".list");
    cartList.classList.toggle("hide");
});

const plus = document.querySelector(".num > :last-child");

plus.addEventListener("click", (e) => {
    var num = parseInt(document.querySelector(".num > p").innerText);
    num++;
    // change of price
    document.querySelector(".num > p").innerText = num.toString();
});

const minus = document.querySelector(".num > :first-child");

minus.addEventListener("click", (e) => {
    var num = parseInt(document.querySelector(".num > p").innerText);
    if (num > 0) {
        num--;
        // change of price
        document.querySelector(".num > p").innerText = num.toString();
    }
});

const order = document.querySelector(".order");
var epmty = 0;

order.addEventListener("click", (e) => {
    var num = document.querySelector(".num > p");
    var originalPrice = document.querySelector(".price > :first-child");

    if (parseInt(num.innerText) > 0 && epmty < 2) {
        epmty++;
        const list = document.querySelector(".list");
        const divout = document.createElement("div");
        const divin = document.createElement("div");
        const img = document.createElement("img");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const span = document.createElement("span");
        const delbtn = document.createElement("button");
        const btn = document.createElement("button");
        const check = document.querySelector(".list > button");
        const after = document.querySelector(".else");
        const info = document.querySelector(".info");

        if (check != null) {
            check.replaceWith("");
        }

        info.classList.remove("hide");
        divout.classList.add("item");
        divin.classList.add("disc");
        img.setAttribute(
            "src",
            "./ecommerce-product-page-main/images/image-product-1-thumbnail.jpg"
        );
        p1.innerText = "Fall Limited Edition Sneakers";
        p2.innerText = `${originalPrice.innerText} * ${num.innerText}`;
        var result =
            parseInt(num.innerText) *
            parseInt(originalPrice.innerText.slice(1));
        span.innerText = `${" $"}${result.toString()}`;
        btn.innerText = "Checkout";
        span.style.color = "black";
        span.style.marginInline = "0.25rem";
        info.innerText = `${parseInt(num.innerText)}`;

        p2.append(span);
        divin.append(img);
        divin.append(p1);
        divin.append(p2);
        divin.append(delbtn);
        divout.append(divin);

        list.append(divout);
        list.append(btn);
        after.classList.add("hide");
        document.documentElement.scrollTop = 0;

        delbtn.addEventListener("click", (e) => {
            const check = document.querySelector(".list > button");
            const list = document.querySelector(".list");
            const after = document.querySelector(".else");
            epmty = 0;
            divout.remove();
            if (list.innerText == "Cart Checkout") {
                check.replaceWith("");
                after.classList.remove("hide");
                info.classList.add("hide");
            }
        });
    }
});

const delnode = document.querySelectorAll(".disc > button");
delnode.forEach((button) => {
    button.addEventListener("click", (e) => {
        const item = document.querySelector(".item");
        const check = document.querySelector(".list > button");
        const list = document.querySelector(".list");
        const after = document.querySelector(".else");
        item.remove();
        if (list.innerText == "Cart Checkout") {
            check.replaceWith("");
            after.classList.remove("hide");
        }
    });
});

const show = document.querySelector("section > img");
const light = document.querySelector(".lighthouse");

show.addEventListener("click", (e) => {
    light.classList.toggle("hide");
});

const cls = document.querySelector(".close");

cls.addEventListener("click", (e) => {
    light.classList.toggle("hide");
});

const images = [
    "c",
    "./ecommerce-product-page-main/images/image-product-1.jpg",
    "./ecommerce-product-page-main/images/image-product-2.jpg",
    "./ecommerce-product-page-main/images/image-product-3.jpg",
    "./ecommerce-product-page-main/images/image-product-4.jpg",
];

const imgs = document.querySelectorAll(".menu > img");

imgs.forEach((image) => {
    image.addEventListener("click", (e) => {
        if (!image.classList.contains("clicked")) {
            const clicked = document.querySelector(".menu > .clicked");
            clicked.classList.remove("clicked");

            image.classList.add("clicked");

            var num = image.getAttribute("value");

            const pic = document.querySelector(".main");

            switch (num) {
                case "1":
                    pic.setAttribute("src", images[1]);
                    break;
                case "2":
                    pic.setAttribute("src", images[2]);
                    break;
                case "3":
                    pic.setAttribute("src", images[3]);
                    break;
                case "4":
                    pic.setAttribute("src", images[4]);
                    break;
                default:
                    return;
            }
        }
    });
});

const previous = document.querySelector(".previous");

previous.addEventListener("click", (e) => {
    const pic = document.querySelector(".main");
    const checked = document.querySelector(".menu > .clicked");
    var num = parseInt(checked.getAttribute("value"));
    if (num === 1) {
        num = 5;
    }
    num--;
    pic.setAttribute("src", images[num]);
    checked.classList.remove("clicked");
    switch (num) {
        case 1:
            const first = document.querySelector(".menu > .first");
            first.classList.add("clicked");
            break;
        case 2:
            const second = document.querySelector(".menu > .second");
            second.classList.add("clicked");
            break;
        case 3:
            const third = document.querySelector(".menu > .third");
            third.classList.add("clicked");
            break;
        case 4:
            const fourth = document.querySelector(".menu > .fourth");
            fourth.classList.add("clicked");
            break;
        default:
            return;
    }
});

const next = document.querySelector(".next");

next.addEventListener("click", (e) => {
    const pic = document.querySelector(".main");
    const checked = document.querySelector(".menu > .clicked");
    var num = parseInt(checked.getAttribute("value"));
    if (num === 4) {
        num = 0;
    }
    num++;
    pic.setAttribute("src", images[num]);
    checked.classList.remove("clicked");
    switch (num) {
        case 1:
            const first = document.querySelector(".menu > .first");
            first.classList.add("clicked");
            break;
        case 2:
            const second = document.querySelector(".menu > .second");
            second.classList.add("clicked");
            break;
        case 3:
            const third = document.querySelector(".menu > .third");
            third.classList.add("clicked");
            break;
        case 4:
            const fourth = document.querySelector(".menu > .fourth");
            fourth.classList.add("clicked");
            break;
        default:
            return;
    }
});
