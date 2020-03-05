# vscodesettings

# Settings for basic environment on new development work macbook

# Brew install

```
cd to this repo
brew bundle
```

# Script for installing vscode extensions

Create a bash script to run this and import settings

```
install-extensions:
    cat extensions.txt | xargs -L 1 code --install-extension
```
