module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "file-loader",
        {
          name: '[name].[ext]',
          extensions: ['otf'],
          outputPath: 'public/fonts/'
        }
    ]
  ]
};
