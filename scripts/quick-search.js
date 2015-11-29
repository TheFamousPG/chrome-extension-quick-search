/**
 * Created by Mathieu on 19/07/2015
 */
var quickSearch = {

    open: 0,

    content: '',

    init: function(){
        $(window).keyup(function(touche){
            var key = touche.which || touche.keyCode;
            if(key == 16){// 16 = shit
                quickSearch.open += 1;
                if(quickSearch.open >= 2){
                    console.log('show !');
                    quickSearch.show();
                } else {
                    setTimeout(function(){
                        quickSearch.open = 0;
                    },500);
                }
            }
        });

        $(window).click(function(e){
            quickSearch.remove();
        });

    },

    // show the popup
    show:function(){
        quickSearch.remove();
        $('body').prepend('<form id="chrome-extension-google-quick-search" action="https://www.google.com/search" method="GET" target="_blank"><input type="text" id="chrome-extension-google-quick-search-input" name="q" placeholder="Press Enter when finished ;)"/></form>').find('#chrome-extension-google-quick-search-input').focus().on('click',function(e){
            e.stopPropagation();
            e.preventDefault();
        });
    },

    // remove the popup
    remove: function(){
        $('#chrome-extension-google-quick-search').remove();
    }
}
quickSearch.init();
