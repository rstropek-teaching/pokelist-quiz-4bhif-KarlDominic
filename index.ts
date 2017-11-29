$(document).ready(function(){
    
    //Offset
    let offset:number = -20;
    let html = '';
    let i = 1;
    var childs:JQuery;
    
    //Nächsten 20 Pokemons
    $("#next").click(function(){
        
        offset+=20;
    
        (async function(){
            const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+offset);
            //Löschen der angezeigten Pokemons
            $('#pokemons li:lt('+i+')').remove();
            for(let j=i; j>=i-20; j--){
                $('#'+j).remove();
            }
             //Hinzufügen der neuen Pokemons
            for(const pokemon of pokelist.results){
                html = `<li>${pokemon.name}</li>`
                $('#pokemons ul').append(html);
                html = "<button id='"+i+"' class='detail'>Details</button>";
                $('#pokemons ul').append(html);
                i++;
            }
        })();
    });
    
    //Vorherige Pokemons
    $("#prev").click(function(){
        
        (async function(){
            offset-=20;
            const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset='+offset);
            //Löschen der angezeigten Pokemons
            $('#pokemons li:lt('+i+')').remove();
            for(i; i>offset+1; i--){
                $('#'+i).remove();
            }
            
            //Hinzufügen der neuen Pokemons
            for(const pokemon of pokelist.results){
                html = `<li>${pokemon.name}</li>`
                $('#pokemons ul').append(html);
                html = "<button id='"+i+"' class='detail'>Details</button>";
                $('#pokemons ul').append(html);
                i++;
            }
        })();
    });
    
    //Detailansicht
    $('body').on('click', '.detail', function(){
        let id = $(this).attr("id");
        childs = $('body').children();   
        (async function(){
            const pokestat = await $.get('https://pokeapi.co/api/v2/pokemon/'+id+'/');
            $('body').children().remove();
    
            let title = "<h1>Details</h1>";
            let titName = "<p>Name</p>";
            let name = `<a>${pokestat.name}</a><br>`;
            let ab = "<p>Abilities</p>";
            let titWeight = "<p>Weight</p>";
            let weight = `<a>${pokestat.weight}</a><br>`;
            let buttonon = "<button id='back'>Back to List</button>";
    
            $('body').append(title);
            $('body').append(titName);
            $('body').append(name);
            $('body').append(titWeight);
            $('body').append(weight);
            $('body').append(ab);
    
            for(const stat of pokestat.abilities){
                html = `<a>${stat.ability.name}</a><br>`;
                $('body').append(html);
            }
    
            let sprite = `<img src='${pokestat.sprites.front_default}'>`;
            $('body').append(sprite);
            $('body').append(buttonon);
        })();
    });
    
    //Versuch die Listenansicht anzuzeigen
    $('body').on('click', '#back', function(){
    
        $('body').children().remove();
        console.log(childs);
        $('body').append(childs[0]);
        
    });
});

