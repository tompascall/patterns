Add flow to project  

```sh
yarn add -D flow-bin`
yarn run flow init
```

Make flow and jest work together  

```sh
npx flow-typed install jest@22 // maybe you need a different version
```

in your .flowconfig, add flow-typed to libs section:  

```
...
[libs]
flow-typed
...
```
