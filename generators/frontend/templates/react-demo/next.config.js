// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
// module.exports = (phase, { defaultConfig }) => {
//     if (phase === PHASE_DEVELOPMENT_SERVER) {
//         return {
//             /* development only config options here */
//         }
//     }

//     return {
//         /* config options for all phases except development here */
//     }
// }
// const webpack = require('webpack')
// module.exports = {
//     webpack: (config, { dev }) => {
//         config.plugins.push(
//             new webpack.ProvidePlugin({
//                 '$': 'jquery',
//                 'jQuery': 'jquery',
//             })
//         )
//         return config
//     }
// }