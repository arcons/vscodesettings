# vscodesettings

# Settings for basic environment on new development work macbook

# Brew install

```
cd to this repo
brew bundle
```

For bash setup
Go to terminal -> preferences set terminal to usr/bin/bash

# Script for installing vscode extensions

Create a bash script to run this and import settings

```
install-extensions:
    cat extensions.txt | xargs -L 1 code --install-extension
```
