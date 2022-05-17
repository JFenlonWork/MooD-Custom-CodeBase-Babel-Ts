const path = require('path');
//const glob = require('glob');
//const WebpackConcatPlugin = require('webpack-concat-files-plugin');

// glob.sync('./Code/js/**/*.js').reduce(function(obj, el){
//     obj[path.parse(el).name] = el;
//     return obj
//  },{})

//webpack --config ./path-to/webpack.config.prod.js

// module.exports = {
//   entry: path.resolve(__dirname, './Code/js/cMaths/cMath.js'),
// //   entry: glob.sync('./Code/js/**/*.js').reduce(function(obj, el){
// //     obj[path.parse(el).name] = el;
// //     return obj
// //  },{}),
//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js']
//   },
//   output: {
//     libraryTarget: 'var',
//     library: 'test',
//     path: path.resolve(__dirname, './Code/dist'),
//     filename: '[name]bundle.js',
//   },
//   optimization: {
//         minimize: false
//   },
// //   plugins: [
// //     new WebpackConcatPlugin({
// //       bundles: [
// //         {
// //           dest: './Code/dist/combined.min.js',
// //           src: './Code/js/**/*.js',
// //         },
// //       ],
// //     }),
// //   ]
// };

module.exports = {
    entry: path.resolve(__dirname, './Definitions/Code/WebpackAll.ts'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                sideEffects: true,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, './.babelrc')
                    }
                }
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        library: 'TestExport',
        libraryTarget: 'var',
        filename: 'bundle.js',
        path: path.resolve(__dirname, './Code/dist'),
    },
    optimization: {
        minimize: false
    }
  };