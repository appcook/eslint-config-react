Default eslint config in `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}
```

new config:

```json
{
  "eslintConfig": {
    "extends": ["../../index.js", "react-app/jest"],
    "rules": {
      "react/react-in-jsx-scope": 0
    }
  }
}
```
