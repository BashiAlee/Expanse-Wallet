const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    watch: true,

    target: 'electron-main',

    entry: ['./main.js','./renderer.js'],

    output: {
        filename: 'bundle.js'
    },
    node: {
        __dirname: false,
        __filename: false
      },
      

    module: {
        rules: [
            {
                test: /.html$/,
                use: [{ loader: "html-loader", options: { minimize: true } }]
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['babel-preset-env']
                  }
                }
              },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(otf|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]',
    
            }
        ]
    },
    
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: './index.html'
          })
    ],

    watch: true,

    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }

}