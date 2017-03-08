const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'lib-browser'),
        filename: '[name].js',
        library: "d3-tip",
        libraryTarget: "umd"
    },
    resolve: {
        alias: {
        },
        extensions: [
            ".js"
        ]
    },
    resolveLoader: {
        alias: {
        }
    },
    module: {
        rules: []
    },
    externals: {
    },
    plugins: []
};

//  Uncomment for unittesting in webbrowser
// config.entry.push("./test/index.ts");
switch (process.env.NODE_ENV) {
    case "watch":
        config.watch = true;
        config.watchOptions = {
        };
        break;
    case "min":
        config.output.filename = 'index.min.js';
        config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
        break;
    case "min-debug":
        config.output.filename = 'index.min-debug.js';
        config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            beautify: true,
            mangle: false
        }));
        break;
    case "test":
        config.entry = ["./test/index.ts"];
        config.output.filename = 'hpcc-platform-comms.test.js';
        config.module.rules[0].options.configFileName = "./tsconfig-test.json"
        break;
    default:
}

module.exports = config;
