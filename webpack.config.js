const webpack = require("webpack");

module.exports = {
    entry: {
        common: ["react", "react-dom"],
        main: ["./entry.js"]
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },
    module: {
        loaders: [
            /*{
             test: /\.(css|scss)$/,
             loader: ExtractTextPlugin.extract("style-loader", "css?sourceMap&localIdentName=[name]-[local]-[hash:base64:8]!postcss-loader?sourceMap")
             },*/
            {
                test: /\.scss$/,
                loader: "sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true"
            },
            {
                test: /.jsx?$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: require.resolve("react"),
                loader: "expose?React"
            },
            {
                test: require.resolve("react-dom"),
                loader: "expose?ReactDOM"
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            __dirname,
            "node_modules"
        ],
        extensions: ["", ".js", ".jsx"],
        root: [__dirname]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.js")
    ]
};