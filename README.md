# vscodesettings

# Settings for basic environment on new development work macbook

# Brew install

```
cd to this repo
brew bundle
```

For bash setup
Start using zsh
`sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

Go to terminal -> preferences set terminal to usr/bin/bash

# Script for installing vscode extensions

Create a bash script to run this and import settings

```
install-extensions:
    cat extensions.txt | xargs -L 1 code --install-extension
```

Git global config file edit
```sh
git config --global --edit
```

# Add `Code` cmd
https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line