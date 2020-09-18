//This is the craco config, which for now is pretty barren since we don't need to customize much with the settings at the moment.

// Don't open the browser during development
process.env.BROWSER = "none";

const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeThemeLessPath: "./antd.customize.less" //default path of our customized ant design theme
            }
        }
    ]
};