const webpack = require( 'webpack' );
//const license = require( './license' );

module.exports = {
    entry: './src/index.js',

    output: {
        path: './dist/',
        filename: 'ginseng.js',
        libraryTarget: 'commonjs2'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    //devtool: 'inline-source-map',

    plugins: [
        /*new webpack.BannerPlugin( license.header ),
        new webpack.BannerPlugin( license.body ),
        new webpack.BannerPlugin( license.footer ),
        new webpack.BannerPlugin( '', { raw: true } ),*/
        //new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } )
    ].reverse( )
}
