const display = document.getElementById('conhecimentos');

const html = document.querySelector('.html');

const css = document.querySelector('.css');

const js = document.querySelector('.js');

const php = document.querySelector('.php');

const java = document.querySelector('.java');

const wp = document.querySelector('.wp');

const react = document.querySelector('.react');

const sql = document.querySelector('.sql');

let cont = 0;

mudadisplay();

setInterval(mudadisplay, 5000);

function mudadisplay(){

    if (cont == 0) {
        fhtml()
       
    } else if (cont == 1){
        fcss()
       
    } else if (cont == 2){
        fjs()
        
    }else if (cont == 3){
        fphp()
       
    }  else if (cont == 4){
        fjava()
       
    } else if (cont == 5){
        fwp()
        
    } else if (cont == 6){
        freact()
        
    } else {
        fsql()
    
    }

};

html.addEventListener("click", function(e) {

    e.preventDefault();

    return fhtml();

});

function fhtml() {

    cont = 1;

    html.style.fill = "rgb(255, 81, 0)";
    css.style.fill = "rgb(44, 44, 44)";
    js.style.fill = "rgb(44, 44, 44)";
    php.style.fill = "rgb(44, 44, 44)";
    java.style.fill = "rgb(44, 44, 44)";
    wp.style.fill = "rgb(44, 44, 44)";
    react.style.fill = "rgb(44, 44, 44)";
    sql.style.fill = "rgb(44, 44, 44)";

    return display.innerHTML = "<h2>HTML5</h2><p>Aprendi com o curso do Guanabara, mais alguns lugares que eu vi, vi também em outros cursos e apliquei na maioria dos meus projetos e mais. </p>"; 
};

css.addEventListener("click", function(e) {

    e.preventDefault();

    return fcss();

});

function fcss(){

    cont = 2;

    html.style.fill = "rgb(44, 44, 44)";
    css.style.fill = "rgb(0, 132, 255)";
    js.style.fill = "rgb(44, 44, 44)";
    php.style.fill = "rgb(44, 44, 44)";
    java.style.fill = "rgb(44, 44, 44)";
    wp.style.fill = "rgb(44, 44, 44)";
    react.style.fill = "rgb(44, 44, 44)F";
    sql.style.fill = "rgb(44, 44, 44)";

    return display.innerHTML = "<h2>CSS3</h2><p>Gosto muito de utilizar essa forma de estilização para web, é fácil usar as funções que a tecnologia tem para ter como resultado uma interface agradável e mais.</p>";

};

js.addEventListener("click", function(e) {

    e.preventDefault();

    return fjs();

});

function fjs(){

    cont = 3;

    html.style.fill = "rgb(44, 44, 44)";
    css.style.fill = "rgb(44, 44, 44)";
    js.style.fill = "rgb(236, 236, 50)";
    php.style.fill = "rgb(44, 44, 44)";
    java.style.fill = "rgb(44, 44, 44)";
    wp.style.fill = "rgb(44, 44, 44)";
    react.style.fill = "rgb(44, 44, 44)F";
    sql.style.fill = "rgb(44, 44, 44)";
    
    return display.innerHTML = "<h2>JavaScript</h2><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus soluta a sed consequatur cumque sapiente, fugiat reprehenderit inventore quos alias quia voluptates dolor fuga veritatis accusantium? Officia in eaque sed</p>";

};


php.addEventListener("click", function(e) {

    e.preventDefault();

    return fphp();

});

function fphp(){

    cont = 4;

    html.style.fill = "rgb(44, 44, 44)";
    css.style.fill = "rgb(44, 44, 44)";
    js.style.fill = "rgb(44, 44, 44)";
    php.style.fill = "rgb(32, 133, 192)";
    java.style.fill = "rgb(44, 44, 44)";
    wp.style.fill = "rgb(44, 44, 44)";
    react.style.fill = "rgb(44, 44, 44)";
    sql.style.fill = "rgb(44, 44, 44)";

    return display.innerHTML = "<h2>php</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore sit explicabo, optio dolore ullam nostrum est reiciendis officia a veniam aperiam corrupti reprehenderit excepturi ratione quae, autem, quasi nisi.</p>";

};

java.addEventListener("click", function(e) {

    e.preventDefault();

    return fjava();

});

function fjava(){

    cont = 5;

    html.style.fill = "rgb(44, 44, 44)";
    css.style.fill = "rgb(44, 44, 44)";
    js.style.fill = "rgb(44, 44, 44)";
    php.style.fill = "rgb(44, 44, 44)";
    java.style.fill = "rgb(214, 27, 27)";
    wp.style.fill = "rgb(44, 44, 44)";
    react.style.fill = "rgb(44, 44, 44)";
    sql.style.fill = "rgb(44, 44, 44)";

    return display.innerHTML = "<h2>Java</h2><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo perspiciatis maxime nisi debitis. Iste incidunt aperiam consequatur maxime, eum labore reiciendis omnis perspiciatis exercitationem ex dolorum, a sit ea tenetur.</p>";

};

wp.addEventListener("click", function(e) {

    e.preventDefault();

    return fwp();

});

function fwp(){

    cont = 6;

    html.style.fill = "rgb(44, 44, 44)";
    css.style.fill = "rgb(44, 44, 44)";
    js.style.fill = "rgb(44, 44, 44)";
    php.style.fill = "rgb(44, 44, 44)";
    java.style.fill = "rgb(44, 44, 44)";
    wp.style.fill = "rgb(0, 81, 255)";
    react.style.fill = "rgb(44, 44, 44)";
    sql.style.fill = "rgb(44, 44, 44)";

    return display.innerHTML = "<h2>WordPress</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio assumenda, mollitia saepe iure neque totam unde tenetur soluta illo quis pariatur dignissimos nobis laborum blanditiis dicta tempore perferendis consequuntur laudantium.</p>";

}

react.addEventListener("click", function(e) {

    e.preventDefault();

    return freact();

});

function freact(){

    cont = 7;

    html.style.fill = "rgb(44, 44, 44)";
    css.style.fill = "rgb(44, 44, 44)";
    js.style.fill = "rgb(44, 44, 44)";
    php.style.fill = "rgb(44, 44, 44)";
    java.style.fill = "rgb(44, 44, 44)";
    wp.style.fill = "rgb(44, 44, 44)";
    react.style.fill = "rgb(0, 174, 255)";
    sql.style.fill = "rgb(44, 44, 44)";

    return display.innerHTML = "<h2>React</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ab cupiditate nostrum qui ratione quod necessitatibus sit, reiciendis cum tempore sed repellat odio, dicta aliquam dignissimos, natus amet soluta dolor!</p>";

}

sql.addEventListener("click", function(e) {

    e.preventDefault();

    return fsql();

});


function fsql(){

    cont = 0;

    html.style.fill = "rgb(44, 44, 44)";
    css.style.fill = "rgb(44, 44, 44)";
    js.style.fill = "rgb(44, 44, 44)";
    php.style.fill = "rgb(44, 44, 44)";
    java.style.fill = "rgb(44, 44, 44)";
    wp.style.fill = "rgb(44, 44, 44)";
    react.style.fill = "rgb(44, 44, 44)";
    sql.style.fill = "rgb(221, 77, 25)";

    return display.innerHTML = "<h2>Sql</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea rem minus, magnam animi, minima voluptatibus sit perferendis eius dolorum fuga, possimus consequuntur quibusdam provident repellat esse? Magnam, deserunt laboriosam.</p>";

};
