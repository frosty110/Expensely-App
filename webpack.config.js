// entry -> output
const path = require('path');

// node thing. explose an object to another file. 
// Webpack is going to run it and will have access to whatever we put in this object.
// this object will be the  configuration for webpack
module.exports = {
    entry: './src/app.js', /// tell webpack where it should build its internal dependency graph
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,  // pass the files ending in js through babel
                exclude: /node_modules/ //ignore the node_module folder. do not pass it through babel
            },
            {
                test: /\.s?css$/,
                use: [ // use allows us to use an array of loaders
                    'style-loader',
                    'css-loader',
                    'sass-loader' // similar to babel. converts .scss into .css files for the browser to read
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', // helps with debugging. It'll show the source app line number and not the babel output file line number
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};