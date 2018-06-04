// entry -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',//cheap-module-eval-source-map', // helps with debugging. It'll show the source app line number and not the babel output file line number
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

