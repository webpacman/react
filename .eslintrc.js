module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [  
        {
            "env": {
                "node": true
            },
            files: ['*.ts', '*.tsx', '*.js'],
            "parserOptions": {
                project: ['./tsconfig.json'],
                "ecmaFeatures": {
                    "jsx": true
                  }
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/member-delimiter-style": ["error", {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
        }],
        "@typescript-eslint/strict-boolean-expressions": 'off',
        "space-before-function-paren": ["error", {
            "anonymous": "always", 
            "named": "never", 
            "asyncArrow": "always"
        }],
        "space-before-function-paren": ["error", {
            "anonymous": "always", 
            "named": "never", 
            "asyncArrow": "always"
        }],
        "@typescript-eslint/space-before-function-paren": ["error", {
            "anonymous": "always", 
            "named": "never", 
            "asyncArrow": "always"
        }]
    }
}
