# Vashon Motorworks

##  Build and Deploy

1.  **Build the site**

    Use the Gatsby CLI to build the site.

    ```sh
    # Download gatsby 
    npm install -g gatsby
    npm gatsby build
    ```

2.  **Deploy the site**

    Use surge to deploy the site. Hostname information is store in the CNAME file.

    ```sh
    npm install -g surge
    surge public/
    ```

## Develop

1.  **Build local**

    Use the Gatsby CLI to develop.

    ```sh
    npm install -g gatsby
    gatsby develop
    ```
