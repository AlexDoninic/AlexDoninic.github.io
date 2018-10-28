var publicResourceLoader=null;
(function(){
    /*var scripts=document.querySelectorAll('script[type="text/javascript"][src]'),matches,resourceUrl='';
    for(var i=0;i<scripts.length;i++){
        if(matches=scripts[i].src.match(/^.*?(?=resource\/js\/resource_loader\.js)/)){
            resourceUrl=matches[0];
        }
    }*/
    function PublicResourceLoader(config){
        this.css=config.css;
        this.scripts=config.scripts;
        this.head=document.getElementsByTagName('head')[0];
        this.loadCSS();
        this.loadScript();
    }
    PublicResourceLoader.prototype={
        construct:PublicResourceLoader,
        loadCSS:function(){
            var that=this;
            this.css.forEach(function(csslink){
                document.write(' <link href="'+csslink+'" rel="stylesheet" />')
            });
        },
        loadScript:function(){
            var that=this;
            this.scripts.forEach(function(scriptlink){
                document.write('<script type="text/javascript" src="'+scriptlink+'"></script>')
            });
        }/*,
        getPath:function(){
            return resourceUrl;
        }*/
    };
    publicResourceLoader = new PublicResourceLoader({
        css:[],
        scripts:[
            './common/WeixinApi.js?ver='+Math.random(),
            './common/server.js?ver='+Math.random(),
            './common/common.js?ver='+Math.random(),
            './common/count.js?ver='+Math.random()
        ]
    });
}());
