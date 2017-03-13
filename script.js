// JavaScript File

function fib(n, node) {
    var tree = fibHelper(n);
    tree.html.setAttribute("class", "initial");
    node.appendChild(tree.html);
}

function fibHelper(n) {
    var value;
    var div = document.createElement('div');
    // leaf nodes aka. base case
    if (n < 2) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else {
        var left = fibHelper(n - 1);
        var right = fibHelper(n - 2);

        left.html.setAttribute("class", "tree-left");
        right.html.setAttribute("class", "tree-right");

        value = left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {
        'value': value,
        'html': div
    }; // returning an object
}

function pell(n, node) {
    var tree = pellHelper(n);
    tree.html.setAttribute("class", "initial");
    node.appendChild(tree.html);
}

function pellHelper(n) {
    var value;
    var div = document.createElement('div');
    // base cases
    if (n <= 1) {
        if (n === 0) {
            value = 0;
        }
        else if (n === 1) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else {
        var left = pellHelper(n - 1);
        var right = pellHelper(n - 2);

        left.html.setAttribute("class", "tree-left");
        right.html.setAttribute("class", "tree-right");

        value = 2 * left.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Pell(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(right.html);
    }
    return {
        'value': value,
        'html': div
    };
}

function trib(n, node) {
    var tree = tribHelper(n);
    tree.html.setAttribute("class", "initial");
    node.appendChild(tree.html);
}

function tribHelper(n) {
    var value;
    var div = document.createElement('div');
    // base cases
    if (n <= 2) {
        if (n === 0 || n === 1) {
            value = 0;
        }
        else if (n === 2) {
            value = 1;
        }
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else {
        var left = tribHelper(n - 1);
        var mid = tribHelper(n - 2);
        var right = tribHelper(n - 3);

        left.html.setAttribute("class", "trib-left");
        mid.html.setAttribute("class", "trib-mid")
        right.html.setAttribute("class", "trib-right");

        value = left.value + mid.value + right.value;
        var p = document.createElement('p');
        p.textContent = 'Trib(' + n + ') = ' + value;
        div.appendChild(p);

        div.appendChild(left.html);
        div.appendChild(mid.html);
        div.appendChild(right.html);
    }
    return {
        'value': value,
        'html': div
    };
}

window.onload = function () {
    document.title = "Sequences";

    var seqMax = 11;

    var bigDiv = document.createElement('div');
    bigDiv.setAttribute("class", "bigDiv red");

    var say = document.createElement('h2');
    var link = document.createElement('a');
    link.textContent = "Fibonacci Sequence";
    link.href = "https://oeis.org/A000045";
    link.target = "_blank";
    say.appendChild(link);
    bigDiv.appendChild(say);
    document.querySelector('body').appendChild(bigDiv);
    fib(seqMax, bigDiv);


    var bigDiv2 = document.createElement('div');
    bigDiv2.setAttribute("class", "bigDiv yellow");

    var say2 = document.createElement('h2');
    var link2 = document.createElement('a');
    link2.textContent = "Pell Sequence";
    link2.href = "https://oeis.org/A000129";
    link2.target = "_blank";
    say2.appendChild(link2);
    bigDiv2.appendChild(say2);
    document.querySelector('body').appendChild(bigDiv2);
    pell(seqMax, bigDiv2);

    var bigDiv3 = document.createElement('div');
    bigDiv3.setAttribute("class", "bigDiv green");

    var say3 = document.createElement('h2');
    var link3 = document.createElement('a');
    link3.textContent = "Tribonacci Sequence";
    link3.href = "https://oeis.org/A000073";
    link3.target = "_blank";
    say3.appendChild(link3);
    bigDiv3.appendChild(say3);
    document.querySelector('body').appendChild(bigDiv3);
    trib(seqMax, bigDiv3);
};
