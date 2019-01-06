function business(){
    window.location.href = "/category?category=business";
}

function entertainment(){
    window.location.href = "/category?category=entertainment";
}

function health(){
    window.location.href = "/category?category=health";
}

function science(){
    window.location.href = "/category?category=science";
}

function sports(){
    window.location.href = "/category?category=sports";
}

function technology(){
    window.location.href = "/category?category=technology";
}

function list(data){
    for(let i=0; i<data.length; i++){
        let temp = data[i];
        let Judul = `<h1>${temp.title}</h1>`;
        let Description = `<p>${temp.description}</h1>`;
        let Tanggal = temp.publishedAt;
        let Tanggall = Tanggal.substring(0, 10) + " " + Tanggal.substring(11, 16);
        let Tanggalll = `<p>${Tanggall}</p>`
        let Img;
        if(temp.urlToImage.length === 0){
            Img = `<img width="200" height="200" align="left" src="/noimage.jpg"></img>`;
        }else{
            Img = `<img width="200" height="200" align="left" src="${temp.urlToImage}"></img>`;
        }
        let item=`<li>${Judul}<div>${Img}${Tanggalll}${Description}<br><a data-ajax="false" href="${temp.url}">Go to source link</a></div></li>`

        $('#listBerita').append(item);
    }
    $('#listBerita').trigger('create');
    $('#listBerita').listview('refresh');
}

$(function(){
    let URL = "https://newsapi.org/v2/top-headlines?country=id&apiKey=8dea789176e942c98ac96d6283535da9";

    let opt = {
        type: 'GET',
        url: URL
    };

    let request = $.ajax(opt);
    request.done(function(r){
        list(r.articles);
    });
});