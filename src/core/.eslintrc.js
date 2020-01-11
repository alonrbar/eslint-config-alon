module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2017": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {        
        "eqeqeq": ["error", "always"],
        "linebreak-style": "off",
        "no-alert": "error",
        "no-bitwise": "error",
        "no-console": "error",
        "no-const-assign": "error",
        "no-debugger": "error",
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-unreachable": "warn",
        "no-var": "error",
        "nonblock-statement-body-position": ["error", "below"],
        "one-var": ["error", "never"],
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-rest-params": "off",        
        "semi": "error"
    }
}