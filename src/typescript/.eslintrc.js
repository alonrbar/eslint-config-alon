module.exports = {    
    "extends": [
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",    
    "plugins": [
        "@typescript-eslint"
    ],
    
    "rules": {
        "@typescript-eslint/array-type": ["error", {
            "default": "array"
        }],
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/class-name-casing": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            "overrides": {
                "constructors": "off"
            }
        }],
        "@typescript-eslint/indent": ["error", 4, {
            "flatTernaryExpressions": true,
            "SwitchCase": 1
        }],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    "public-static-field",
                    "protected-static-field",
                    "private-static-field",
                    "public-static-method",
                    "protected-static-method",
                    "private-static-method",
                    "public-instance-field",
                    "protected-instance-field",
                    "private-instance-field",
                    "constructor",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method"
                ]
            }
        ],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "args": "none",
            "ignoreRestSiblings": true
        }],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/semi": "error",        
        "semi": "off"
    }
}