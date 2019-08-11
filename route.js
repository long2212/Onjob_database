const url = require('url');
const fs = require('fs');



const handler = ((req, res) => {
    if (req.url == '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');

        res.write('<head>');
        res.write('<title>Hello NodeJs</title>');
        res.write('</head>');

        res.write('<body>');
        res.write('<h2 style="color:red">Welcome HOME</h2>');
        res.write('</body>');

        res.write('</html>');

        res.end();
    } else if (req.url == '/detail') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');

        res.write('<head>');
        res.write('<title>Hello NodeJs</title>');
        res.write('</head>');

        res.write('<body>');
        res.write('<h2 style="color:red">DETAIL</h2>');
        res.write('</body>');

        res.write('</html>');

        res.end();
    } else {
        const url = req.url;
        if (url.startsWith('/sayHello')) {
            const params = url.split('?');
            if (params.length == 2) {
                const paramNames = params[1].split('&');
                let urlParams = [];
                paramNames.forEach(el => {
                    const values = el.split('=');
                    urlParams.push({ name: values[0], value: values[1] });
                });
                const nameParam = urlParams.find(x => x.name === 'name');
                const ageParam = urlParams.find(x => x.name === 'age');

                if (nameParam) {
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<html>');

                    res.write('<head>');
                    res.write('<title>Hello NodeJs</title>');
                    res.write('</head>');

                    res.write('<body>');
                    res.write('<h2 style="color:red">Hello:' + nameParam.value + '</h2>');
                    res.write('<h2 style="color:red">Age:' + ageParam.value + '</h2>');
                    res.write('</body>');

                    res.write('</html>');

                    res.end();
                }
            }
        }

        if (req.url.startsWith('/sayHello')) {
            var q = url.parse(req.url, true);
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');

            res.write('<head>');
            res.write('<title>Hello NodeJs</title>');
            res.write('</head>');

            res.write('<body>');
            res.write('<h2 style="color:red">Hello:' + q.query.name + '</h2>');
            res.write('<h2 style="color:red">Age:' + q.query.age + '</h2>');
            res.write('</body>');

            res.write('</html>');
            res.end();
        }
    }
});

const sum = (a,b) => a+b;
const arr = [[1,2,3,4,5,6,7,8,9],[1,2]];

module.exports = {
    handler: handler,
    name: "Routing",
    add: sum,
    data: arr
};