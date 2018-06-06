// entry -> output
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// setup firebase enviroment varaibles to match the testing database or production database
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'test'){
    require('dotenv').config({path: '.env.test'});
} else if (process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'});
}

// node. expose this object to another file. 
// Webpack is going to run it and will have access to whatever we put in this object.
// this object will be the  configuration for webpack

// exporting a function to get access to variables
module.exports = (env) =>{

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js', /// tell webpack where it should build its internal dependency graph
        output: {
            path: path.join(__dirname, 'public','dist'),
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
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            CSSExtract,
            // this copies any reference on the left and replaces it with the right. We stringify it to add quotes around the text
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE': JSON.stringify(process.env.FIREBASE_DATABASE),
                'process.env.FIREBASE_PROJECT': JSON.stringify(process.env.FIREBASE_PROJECT),
                'process.env.FIREBASE_STOREAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STOREAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',//cheap-module-eval-source-map', // helps with debugging. It'll show the source app line number and not the babel output file line number
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

