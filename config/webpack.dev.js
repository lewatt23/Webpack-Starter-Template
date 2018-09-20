const path = require("path");

module.exports = {
    entry:{
        main:"./src/main.js"
    },
    mode:"development",
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,"../dist"),
        publicPath:"/"
    
    },
    devServer:{
        contentBase :"dist",
        overlay:true
    },
    module:{
        rules :[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            {
                test:/\.sass$/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"extract-loader"
                    },
                    {
                        loader:"html-loader",
                        options:{
                            attrs:["img:src"]
                        }
                    },
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].html"
                        }
                    }
                ]
            },
            {
                test:/\.(jpg|gif|png)$/,
                use:[ {
                        loader:"file-loader",
                        options:{
                            name:"images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    }

}