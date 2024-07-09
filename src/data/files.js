
const url = process.env.REACT_APP_URL;

export const filesData = [
    {
        id: 1,
        name: "favicon.ico",
        category: "image",
        size: 1,
        type: "image/png",
        url: `${url}/favicon.ico`
    },
    {
        id : 2,
        name : "index.html",
        category : "html",
        size : 2,
        type : "text/html",
        url : `${url}/index.html`
    },
    {
        id : 3,
        name : "robots.txt",
        category : "text",
        size : 3,
        type : "text/plain",
        url : `${url}/robots.txt`
    },
    {
        id : 4,
        name : "manifest.json",
        category : "json",
        size : 4,
        type : "application/json",
        url : `${url}/manifest.json`
    },
    {
        id : 5,
        name : "logo192.png",
        category : "image",
        size : 5,
        type : "image/png",
        url : `${url}/logo192.png`
    },
    {
        id : 6,
        name : "logo512.png",
        category : "image",
        size : 6,
        type : "image/png",
        url : `${url}/logo512.png`
    },

]