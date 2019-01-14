function topH(){
    window.location.href = "/";
}

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
        let Judul = `<h1><a data-ajax="false" href="${temp.url}">${temp.title}</a></h1>`;
        let Description = `<p>${temp.description}</h1>`;
        let Tanggal = temp.publishedAt;
        let Tanggall = Tanggal.substring(0, 10) + " " + Tanggal.substring(11, 16);
        let Tanggalll = `<p>${Tanggall}</p>`
        let Img;
        if(temp.urlToImage === null){
            Img = `<img width="300" height="250" src="/noimage.jpg"></img>`;
        }else{
            Img = `<img width="300" height="250" src="${temp.urlToImage}"></img>`;
        }
        let item=`<li>${Judul}<div>${Tanggalll}${Img}${Description}</div></li>`

        $('#listBerita').append(item);
    }
    $('#listBerita').trigger('create');
    $('#listBerita').listview('refresh');
}

$(function(){
    let para = window.location.search;
    let search = new URLSearchParams(para);
    let category = search.get("category");
    let URL = "https://newsapi.org/v2/top-headlines?country=id&category=" + category + "&apiKey=8dea789176e942c98ac96d6283535da9";
    let title = category.substring(0, 1).toUpperCase() + category.substring(1, category.length);
    $("#title").text(title);

    if(category == "business"){
        $("#business").addClass('ui-btn-active');
    }else if(category == "entertainment"){
        $("#entertainment").addClass('ui-btn-active');
    }else if(category == "health"){
        $("#health").addClass('ui-btn-active');
    }else if(category == "science"){
        $("#science").addClass('ui-btn-active');
    }else if(category == "sports"){
        $("#sports").addClass('ui-btn-active');
    }else if(category == "technology"){
        $("#technology").addClass('ui-btn-active');
    }
    
    let opt = {
        type: 'GET',
        url: URL
    };

    let request = $.ajax(opt);
    request.done(function(r){
        list(r.articles);
    });
});