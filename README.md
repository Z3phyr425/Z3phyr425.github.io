PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\CL3-PC18/.ssh/id_rsa): 
C:\Users\CL3-PC18/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in C:\Users\CL3-PC18/.ssh/id_rsa.
Your public key has been saved in C:\Users\CL3-PC18/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:HuyWT+zS07epp7EVXoaiMOJhc4SVXlJCfjSAnmgJZ8g cl3-pc18@DESKTOP-F1TTDQ7
The key's randomart image is:
+---[RSA 3072]----+
| . .   o=++      |
|   + +.ooo.      |
|    + oo..     . |
|   .  = S   . o o|
|     o B * . o + |
|      . =.+.. o  |
|         .o.+=o. |
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> cat C:\Users\CL3-PC18/.ssh/id_rsa.pub
ImzqcC2NyjeIrhmm4bRwrH23gxaKQefHVc8+ieQ1RTaPsVETxF1qyI3V0nEq/37hzvprWy37p9OXabAq6/A0eRXvg97noVv5vKGj1PXn9VqRSqzokSldfx/DLsPk11QzGnQgTyhAjFxMq/1kxb8Jqg32+Kl1PNJNJonORacAmqinFqaw2NtFyxq+NWubqK8XJ36BZ6UCA4NwLI4A/dYJH6Ly4Qg30FwuffDk6VMrLTU+2IqRVNaHUNi9hqwjqXODnBci2UTzO3GWePfpb0HffxbB7j7lNWqEHpsz00Zd/FrO9Sdfpw3eZknum2qcwYRFkgZAnLRFmKnmwsFk9/Vu+FRFhP+XXqcg04hAmtwfVPednAtxYrF/EplHbwr6fb53rOhRPTo4oB+IbJ9x7oc24kbk= cl3-pc18@DESKTOP-F1TTDQ7
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> git remote-url set origin git@github.com:Z3phyr425/Z3phyr425.github.io.git     
git: 'remote-url' is not a git command. See 'git --help'.
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> git remote
origin
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> git remote url get
error: unknown subcommand: `url'
usage: git remote [-v | --verbose]
   or: git remote add [-t <branch>] [-m <master>] [-f] [--tags | --no-tags] [--mirror=<fetch|push>] <name> <url>
   or: git remote rename [--[no-]progress] <old> <new>
   or: git remote remove <name>
   or: git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
   or: git remote [-v | --verbose] show [-n] <name>
   or: git remote prune [-n | --dry-run] <name>
   or: git remote set-branches [--add] <name> <branch>...
   or: git remote set-url [--push] <name> <newurl> [<oldurl>]

    -v, --[no-]verbose    be verbose; must be placed before a subcommand

PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> git remote get-url origin                                                      
https://github.com/Z3phyr425/Z3phyr425.github.io
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> git remote-url set origin git@github.com:Z3phyr425/Z3phyr425.github.io.git     
git: 'remote-url' is not a git command. See 'git --help'.
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> git remote set-url origin git@github.com:Z3phyr425/Z3phyr425.github.io.git     
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> git push -u origin master
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
PS D:\Tungol\Z3phyr425.github.io-main\Z3phyr425.github.io-main> 
