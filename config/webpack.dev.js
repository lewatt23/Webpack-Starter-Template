const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
                use: ExtractTextPlugin.extract(
                    {
                      fallback: 'style-loader',
                      use: ['css-loader']
                    })
            },
            {
                test:/\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                      fallback: 'style-loader',
                      use: ['css-loader','sass-loader']
                    })
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
    },
    plugins: [ 
      new ExtractTextPlugin({filename: 'style.css'})
    ]

}
