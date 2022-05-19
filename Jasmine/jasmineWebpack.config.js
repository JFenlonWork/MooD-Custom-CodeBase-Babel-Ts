const path = require('path');
const glob = require("glob");

module.exports = {
    entry: glob.sync("./Jasmine/Tests/Modules/**/*.ts"),
    module: {
        rules: [
            {
                test: /\.ts$/,
                sideEffects: true,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, '../.babelrc')
                    }
                }
            },
        ],
    },
    externals: {
        jquery: 'jQuery',
        jasmine: 'jasmine'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        library: 'TestExport',
        libraryTarget: 'window',
        filename: 'jasmineTestBundle.js',
        path: path.resolve(__dirname, 'Jasmine Standalone'),
    },
    optimization: {
        minimize: false
    },
    target: 'node'
  };