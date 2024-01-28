## How to generate and use a SSL certificate in NodeJS

**SSL COMMANDS (using gitbash only)**

Install Openssl latest version before executing commands


**CREATE CERT FOLDER FOR YOUR KEYS**
```
    cmd
    mkdir cert
```

**GO TO THE DIRECTORY YOU CREATED**
```
    cmd
    cd cert
```

**Generate Private Key**

```
    cmd
    openssl genrsa -out key.pem
```


**GENERATE CSR (CERTIFICATE SIGNING REQUEST)**

```
    cmd
    openssl req -new -key key.pem -out csr.pem
```

**GENERATE SSL CERTIFICATION FROM CSR**

```
    cmd
    openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

## FINISH STRUCTURE OF CERT FOLDER SHOULD LOOK LIKE

```
    cmd
    -cert
        -cert.pem
        -csr.pem
        -key.pem
        
    -node_modules
    -routes
    -etc ...
```
