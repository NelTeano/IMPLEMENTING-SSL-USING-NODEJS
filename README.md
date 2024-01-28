## How to generate and use a SSL certificate in NodeJS

**SSL COMMANDS (using gitbash only)**

Install Openssl latest version before executing commands


**CREATE CERT FOLDER FOR YOUR KEYS**
```
    mkdir cert
```

**GO TO THE DIRECTORY YOU CREATED**
```
    cd cert
```

**GENERATE PRIVATE KEY**

```
    openssl genrsa -out key.pem
```


**GENERATE CSR (CERTIFICATE SIGNING REQUEST)**

```
    openssl req -new -key key.pem -out csr.pem
```

**GENERATE SSL CERTIFICATION FROM CSR**

```
    openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

## FINISH STRUCTURE OF CERT FOLDER SHOULD LOOK LIKE

```
    -cert
        -cert.pem
        -csr.pem
        -key.pem
        
    -node_modules
    -routes
    -etc ...
```
