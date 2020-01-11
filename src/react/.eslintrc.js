module.exports = {    
    "extends": [
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {        
        "react/jsx-uses-vars": "error",
        "react/no-find-dom-node": "off",
        "react/no-unescaped-entities": "off",
        "react/prop-types": "off"        
    }
}