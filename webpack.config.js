module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Passphrase: 'app/components/Passphrase.jsx',
            Encryption: 'app/components/Encryption.jsx',
            Enigma: 'app/components/Enigma.jsx',
            Message: 'app/components/Message.jsx',
            EncryptAPI: 'app/api/EncryptAPI.jsx',
            Main: 'app/components/Main.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};
