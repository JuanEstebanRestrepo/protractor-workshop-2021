# protractor-workshop-2021

### **1. Configuración Inicial del Proyecto**

**Descripción**: Se configurará inicialmente el proyecto con [TypeScript](https://www.typescriptlang.org/) y se hará una prueba sobre la página de [Google](https://www.google.com/). Adicionalmente se creará la configuración necesaria básica para un repositorio de [Github](https://help.github.com/)

**Nota:** Si no tiene conocimiento sobre Github se le recomienda realizar las [Guias de Github](https://guides.github.com/activities/hello-world/) o el lab de [Introduction to Github](https://lab.github.com/githubtraining/introduction-to-github)

1. Crear una cuenta en Github si no la tiene.
2. Crear un repositorio en limpio dentro de la página de GitHub con el nombre de “**protractor-workshop-2021**”
3. Crear una carpeta en su computador llamada `protractor-workshop-2021` y ubicarse en ella en una consola
4. Seguir las instrucciones para realizar el primer commit (use las que aparece en lá página de github)
    
    ```bash
    echo "# protractor-workshop-2021" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:<su-usuario>/protractor-workshop-2021.git
    git push -u origin master
    ```
    
5. [Instalar JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) en su equipo si no lo tiene instalado
6. [Instalar NodeJS](https://nodejs.org/es/download/package-manager/) en su equipo si no lo tiene instalado. **Nota:** Recomendamos el uso una versión igual o superio de NodeJS 6 y de NPM 5
7. Crear el archivo .editorconfig a raíz del proyecto con la siguiente información
    
    ```bash
    root = true
    
    [*]
    indent_style = space
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    indent_size = 2
    
    [*.md]
    indent_size = 4
    trim_trailing_whitespace = false
    ```
    
8. Instalar la extensión de Visual Studio Code `EditorConfig for VS Code` (Generalmente requiere reinicio del IDE)
9. Ejecutar en una consola `npm init` dentro de la ruta donde se encuentra el repositorio y colocar la siguiente información:
    
    [Untitled](https://www.notion.so/85e356c198ef4425901e57def3b0dd90)
    
10. Instalar la dependencia de protractor `npm install --save-dev protractor`
11. Instalar las dependencias de desarrollo de typescript `npm i --save-dev typescript`
12. Instalar los types de NodeJS `npm install --save-dev @types/node`
13. Instalar los types de Jasmines `npm install --save-dev @types/jasminewd2`
14. Crear en la raíz del proyecto la carpeta **protractor** y dentro de ella el archivo **local.config.ts** y agregar la siguiente información
    
    ```jsx
    import { Config } from 'protractor';
    
    export const config: Config = {
      framework: 'jasmine',
      specs: [ '../test/google.spec.js' ],
      seleniumAddress: 'http://localhost:4444/wd/hub'
    };
    ```
    
15. Actualizar los drivers con el comando
    
    `npx webdriver-manager update`
    
16. En la consola ejecutar
    
    `npx webdriver-manager start`
    
17. Crear la carpeta **test** en la raíz del proyecto y dentro de la carpeta crear el archivo **google.spec.ts**
    
    ```jsx
    import { browser } from 'protractor';
    
    describe('This is the first example of protractor', () => {
      it('should have a title', () => {
        browser.ignoreSynchronization = true;
        browser.get('http://www.google.com');
        expect(browser.getTitle()).toEqual('Google');
      });
    });
    ```
    
18. Crear el archivo **tsconfig.json** en la raíz del proyecto con el siguiente contenido
    
    ```jsx
    {
      "compilerOptions": {
        "target": "es6",
        "sourceMap": true,
        "outDir": "dist",
        "module": "commonjs",
        "moduleResolution": "node",
        "noUnusedParameters": true,
        "noUnusedLocals": true
      }
    }
    ```
    
19. Modificar los scripts del package.json para que tengan el siguiente contenido:
    
    ```jsx
    "clean": "rm -rf dist",
    "build": "npm run clean && tsc",
    "test": "npm run build && protractor dist/protractor/local.config.js"
    ```
    
20. Ejecutar el comando en una segunda consola `npm test` y comprobar que la prueba pasa de forma satisfactoria
21. Crear el archivo **.gitignore** en la raíz del proyecto. Ingresar a la página [https://www.gitignore.io/](https://www.gitignore.io/) y en el área de texto agregar el *sistema operativo*, *IDE's* y *NodeJS*, ejemplo *OSX Node VisualStudioCode*. Genere el archivo y cópielo dentro del archivo **.gitignore**
22. Agregar al final del **.gitignore** las siguientes líneas
    
    ```jsx
    # Typescript
    dist
    ```
    
23. Crear el archivo **LICENSE** en la raíz del proyecto con lo especificado en [https://en.wikipedia.org/wiki/MIT_License](https://en.wikipedia.org/wiki/MIT_License) (*Tenga en cuanta cambiar el año y el copyright holders.*
24. Realizar un commit donde incluya los 8 archivos modificados con el mensaje “setup protractor configuration” y subir los cambios al repositorio
    
    ```bash
    git add .
    git commit -m "setup protractor configuration"
    git push origin master
    ```
    

### **2. Mejorando el primer caso de prueba**

**Descripción**: Se utilizará el método `onPrepare` para configurar la información que debería ser igual en todas las pruebas, adicionalmente se utilizará el `beforeEach` para organizar la prueba de forma más legible

1. Crear la rama **improve-test** a partir de master
2. Modificar el **protractor/local.config.ts** agregando la propiedad `onPrepare` con el siguiente contenido:
    
    ```jsx
    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }
    ```
    
    La propiedad config debe lucir algo así:
    
    ```jsx
    import { Config, browser } from 'protractor';
    
    export const config: Config = {
      framework: 'jasmine',
      specs: [ '../test/google.spec.js' ],
      seleniumAddress: 'http://localhost:4444/wd/hub',
      onPrepare: () => {
        browser.ignoreSynchronization = true;
      }
    };
    ```
    
3. Cambiar el contenido del archivo **google.spec.ts** por
    
    ```jsx
    import { browser } from 'protractor';
    
    describe('Given a SDET learning protractor', () => {
      describe('when open Google Page', () => {
        beforeEach(() => {
          browser.get('http://www.google.com');
        });
    
        it('then should have a title', () => {
          expect(browser.getTitle()).toEqual('Google');
        });
      });
    });
    ```
    
4. Ejecutar `npm test` y verificar la correcta ejecución de la prueba
5. Subir los cambios a Github
6. Crear un PR, asignar los revisores y esperar por la aprobación o comentarios de los revisores.
7. Una vez aprobado realizar el merge a master seleccionando la opción “squash and merge”
8. Eliminar la rama una vez mergeada

### **3. Agregando Reporte a la Consola**

**Descripción**: Es necesario poder ver los resultados de una forma entendible en la consola, en esta sesión se configura un reporte de consola.

1. Instale la dependencia de desarrollo **jasmine-spec-reporter** `npm install --save jasmine-spec-reporter`
2. Crear la carpeta **protractor/helpers** y dentro de la carpeta el archivo **reporter.ts** con el siguiente contenido
    
    ```jsx
    import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
    export let reporter = () => {
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: StacktraceOption.PRETTY
        }
      }));
    };
    ```
    
3. Modifique el archivo **local.config.ts** incluyendo el `import` del `reporter`
    
    `import { reporter } from '../helpers/reporter';`
    
4. Dentro del método `onPrepare` agregar el llamado al método reporter
    
    `reporter();`
    

### **4. Desactivar el manejador de promesas y Selenium server**

**Descripción**: Para [Octubre del 2018](https://github.com/SeleniumHQ/selenium/issues/2969) WebDriverJS dejará de dar soporte a un tipo de promesas personalizadas que ha trabajado desde sus inicios, aunque hoy en día aún hay soporte es necesario empezar a trabajar de la forma que recomienda Protractor

1. Eliminar la propiedad `seleniumAddress` del **local.config.ts**
2. Termine el proceso del `npx webdriver-manager start` (ya no es necesario)
3. Agregar la propiedad `SELENIUM_PROMISE_MANAGER` con el valor `false` en el **local.config.ts**
4. Modificar el archivo de **google.spec.ts** para que trabaje con **async/await**
    
    ```jsx
    import { browser } from 'protractor';
    
    describe('Given a SDET learning protractor', () => {
      describe('when open Google Page', () => {
        beforeEach(async () => {
          await browser.get('http://www.google.com');
        });
    
        it('then should have a title', async () => {
          await expect(browser.getTitle()).toEqual('Google');
        });
      });
    });
    ```
    

### **5. Chrome Headless**

**Descripción**: Muchas veces no contamos con servidores de integración continua que tengan acceso a máquinas con interfaz gráfica. Existen algunos navegadores que tienen versión headless que funcionan sin interfaz gráfica pero se comportan muy similar a los navegadores comunes. En esta sesión vamos a configurar la versión headless de chrome

1. Duplicar el archivo **local.config.ts** con el nombre de **headless.config.ts**
2. Agregar la propiedad de capabilities en el nuevo archivo con la siguiente información
    
    ```tsx
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu']
      }
    }
    ```
    
3. Duplicar el script **test** del **package.json** con el nombre de **test:headless** y cambia la ruta de ejecución al archivo **headless.conf.js**
4. Cambia el nombre del script **test** por **test:local**
5. Ejecuta tanto el comando `npm run test:local` como el `npm run test:headless` para comprobar que ejecuta efectivamente

### **7. Agregando Análisis de Código Estático**

**Descripción**: El análisis de código estático nos ayuda a estandarizar la forma en como escribimos código, en esta sesión configuraremos tslint con airbnb para tener análisis de código estático

1. Agregar las dependencias de desarrollo **tslint** y **tslint-config-airbnb**
2. Crear el archivo **tslint.json** en la raíz con la siguientes información
    
    ```json
    {
      "defaultSeverity": "error",
      "extends": [
        "tslint-config-airbnb"
      ],
      "rules": {
        "trailing-comma": [true]
      }
    }
    ```
    
3. Agregar el script de **package.json** lint `"lint": "tslint --project tsconfig.json protractor/**/*.ts test/**/*.ts src/**/*.ts"`
4. Corregir las reglas de forma automática `npm run lint -- --fix`
5. Las reglas que no se puedan corregir automáticamente investigue y corrijalas. Ejecute el comando `npm run lint` para verificar que reglas esta rompiendo
6. Modifique el script de `build` del `package.json` agregandole al principio `npm run lint &&`

**NOTA:** se recomienda instalar la extensión `TSLint` de vs code

### **8. Depurando El Código**

**Descripción**: La depuración nos ayudará a identificar y corregir las parte del código que estén presentando fallas, así como poder tener una mayor entendimiento de las valores de las variables en tiempo de ejecución. Para activar el debugger en `vs code`:

1. Vaya a la vista de `Debug` (⇧⌘D - mac / )
2. Haga click en el ícono del engranaje y seleccione `Node.js`. Estor creará el archivo `.vscode/launch.json`
3. Reemplace el contenido del archivo por la siguiente información
    
    ```json
    {
      // Use IntelliSense to learn about possible attributes.
      // Hover to view descriptions of existing attributes.
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Debug tests",
          "program": "${workspaceRoot}/node_modules/protractor/bin/protractor",
          "args": ["${workspaceRoot}/dist/protractor/local.config.js"],
          "preLaunchTask": "npm: build",
          "sourceMaps": true,
          "smartStep": true,
          "internalConsoleOptions": "openOnSessionStart",
          "outFiles": [
              "${workspaceFolder}/dist/**/*.js"
          ]
        },
        {
          "type": "node",
          "request": "launch",
          "name": "Debug headless tests",
          "program": "${workspaceRoot}/node_modules/protractor/bin/protractor",
          "args": ["${workspaceRoot}/dist/protractor/headless.config.js"],
          "preLaunchTask": "npm: build",
          "sourceMaps": true,
          "smartStep": true,
          "internalConsoleOptions": "openOnSessionStart",
          "outFiles": [
              "${workspaceFolder}/dist/**/*.js"
          ]
        }
      ]
    }
    ```
    
4. Compruebe que puede lanzar las pruebas y depurarlas utilzando `vs code`
5. Envíe un pull request con una captura de pantalla en la que se identifique fue posible hacer depuración del test `google.spec.ts`

Sobre las [opciones de depuración de node](https://code.visualstudio.com/docs/nodejs/nodejs-debugging):

- *program* - ejecutable de entrada del depurador
- *args* - ruta al config del protractor en el directorio `dist`
- *preLaunchTask* - ejecuta la tarea
- *sourceMaps* - utiliza los source maps del directorio `dist`
- *smartStep* - omite código **no interesante** que se genera en el proceso de transpilación
- *internalConsoleOptions* - abre la terminal del depuración
- *outFiles* - ruta dónde están los archivos `sourceMap`

### **9. CSS Selector**

**Descripción**: Los css selector son los selectores más utilizados por los desarrolladores, tener un buen dominio de ellos facilita la automatización de pruebas. En esta sesión se implementará un primer caso de pruebas con css selectores

1. Crear el archivo **buy-tshirt.spec.ts** dentro de la carpeta **test**
2. Escribir dentro del archivo el siguiente contenido
    
    ```jsx
    import { $, browser } from 'protractor';
    
    describe('Buy a t-shirt', () => {
      beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
      });
    
      it('then should be bought a t-shirt', async () => {
        await browser.get('http://automationpractice.com/');
        await(browser.sleep(10000));
        await $('#block_top_menu > ul > li:nth-child(3) > a').click();
        await(browser.sleep(3000));
        await $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click();
        await(browser.sleep(3000));
        await $('[style*="display: block;"] .button-container > a').click();
        await(browser.sleep(3000));
        await $('.cart_navigation span').click();
        await(browser.sleep(3000));
    
        await $('#email').sendKeys('aperdomobo@gmail.com');
        await $('#passwd').sendKeys('WorkshopProtractor');
        await $('#SubmitLogin > span').click();
        await(browser.sleep(3000));
    
        await $('#center_column > form > p > button > span').click();
        await(browser.sleep(3000));
    
        await $('#cgv').click();
        await(browser.sleep(3000));
    
        await $('#form > p > button > span').click();
        await(browser.sleep(3000));
        await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
        await(browser.sleep(3000));
        await $('#cart_navigation > button > span').click();
        await(browser.sleep(3000));
    
        await expect($('#center_column > div > p > strong').getText())
          .toBe('Your order on My Store is complete.');
      });
    });
    ```
    
3. Modifique los archivos de configuración de protractor cambiando
    
    `specs: ['../test/**/*.spec.js']`
    
    y
    
    `getPageTimeout: 1000`
    
4. Ejecute las pruebas tanto con interfaz gráfica como en modo headless. Si alguna prueba falla modificarla utilizando css locators o los tiempos hasta que logre funcionar

### **10. Page Object Model**

**Descripción**: El page object model es el patrón por defecto que se utiliza para la mantenibilidad de las pruebas, conocer cómo implementar este patrón le ahorrará muchas horas de reproceso en el futuro. En esta sesión se hará la primera implementación del patrón Page Object Model (POM)

1. Crear la carpeta **src/page** desde la raíz del proyecto
2. Crear el archivo **src/page/menu-content.page.ts** con el siguiente contenido
    
    ```jsx
    import { $, ElementFinder } from 'protractor';
    
    export class MenuContentPage {
      private tShirtMenu: ElementFinder;
    
      constructor () {
        this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
      }
    
      public async goToTShirtMenu(): Promise<void> {
        await this.tShirtMenu.click();
      }
    }
    ```
    
3. Crear el archivo **src/page/index.ts** con el siguiente contenido
    
    `export { MenuContentPage } from './menu-content.page';`
    
4. Modificar el archivo **buy-tshirt.spec.ts** de la siguiente forma
    - Importar la dependencia del page object despues del import de protractor
        
        ```jsx
        import { browser } from 'protractor';
        import { MenuContentPage } from '../src/page';
        ```
        
    - Creando una instancia del objeto `MenuContentPage`
        
        ```jsx
        describe('Buy a t-shirt', () => {
        const menuContentPage: MenuContentPage = new MenuContentPage();
        ```
        
    - Modificando el locator que le da clic en el menú de t-shirt
        
        ```jsx
        await browser.get('http://automationpractice.com/');
        await(browser.sleep(3000));
        await menuContentPage.goToTShirtMenu();
        ```
        
5. Realice el resto de page object y remplacelo en la prueba, los nombres de los page object son: **address-step.page.ts**, **bank-payment.page.ts**, **order-summary.page.ts**, **payment-step.page.ts**, **product-added-modal.page.ts**, **product-list.page.ts**, **shipping-step.page.ts**, **sign-in-step.page.ts**, **summary-step.page.ts**
6. Ejecute las pruebas tanto con interfaz gráfica como en modo headless. Si alguna prueba falla modificarla utilizando css locators o los tiempos hasta que logre funcionar

### **11. Esperas de Carga de Página y de Jasmine**

**Descripción**: Las esperas en selenium son los tiempos que se esperará para realizar algunas acciones, conocerlos y saber cómo utilizarlos nos disminuirá la fragilidad de las pruebas y adicionalmente nos ayudará a reducir los tiempos de ejecución.

1. Cambia el valor del `getPageTimeout` por `30000` en los archivos de configuración de protractor
2. Elimina el `sleep` de **10000**
3. Ejecutar las pruebas y verifica que aun sigan funcionando
4. Agregar el tiempo de espera de Jasmine dentro de los archivos de configuración como muestra la siguiente imagen
    
    ```jsx
    jasmineNodeOpts: {
      defaultTimeoutInterval: 120000
    }
    ```
    
5. Eliminar el `beforeEach` de la prueba
6. Ejecute las pruebas tanto con interfaz gráfica como en modo headless. Si alguna prueba falla modificarla utilizando css locators o los tiempos hasta que logre funcionar

### **12. Esperas Implicitas**

**Descripción**: Una espera implícita es una espera global que se tiene para cada elemento de la página. En esta sesión veremos cómo tenerla configurada nos ayudará a reducir la cantidad de sleeps de la prueba

1. Agregar dentro del onPrepare de los archivos de config la línea
    
    ```jsx
    browser.manage().timeouts().implicitlyWait(3000);
    ```
    
2. Quitar todos los sleeps de la prueba
3. Ejecute las pruebas tanto con interfaz gráfica como en modo headless. Si alguna prueba falla modificarla utilizando css locators o los tiempos hasta que logre funcionar

### **13. Esperas Explicitas**

**Descripción**: Las esperas explícitas es la más recomendada, ya que nos permite hacer esperas puntuales sobre algunos elementos y no sobre todos. En esta sesión desactivaremos las esperas implícitas y activaremos las explícitas donde sea necesario

1. Modificar los archivos de configuración de tal forma que desactive las esperas implicitas
    
    ```jsx
    browser.manage().timeouts().implicitlyWait(0)
    ```
    
2. Ejecute la prueba e identifique en qué partes la prueba falla
3. Utiliza esperas explícitas para solucionar las fallas de la prueba. busque apoyo de **browser** y **ExpectedConditions**
4. Ejecute las pruebas tanto con interfaz gráfica como en modo headless. Si alguna prueba falla modificarla utilizando css locators o los tiempos hasta que logre funcionar

### **14. Mejorando los Locator**

**Descripción**: En esta sesión usted hará la propuesta de que locators deberían ser utilizados en la prueba que se está implementado.

1. Haga su propia propuesta de locators para cada uno de los page-objects
2. Enviar PR con los cambios
3. El revisor comentará con los que no está de acuerdo, en ese caso, justifique la razón de su selección (No une **XPATH**)

### **15. Separar prueba en diferentes describes**

**Descripción**: Por legibilidad es bueno tener sesionados cada uno de los pasos de las pruebas en diferentes describes, en esta sesión usted aprenderá cómo hacerlo

1. Modificar la prueba de **buy-tshirt.spec.ts** de tal forma que tenga varios describes de la siguiente forma
    - Abrir la página en el navegador
    - Proceso de compra de la Camiseta
    - Logeo en la aplicación
    - Seleccionar la dirección por defecto
    - Pago en el banco (Este debe contener el `it` de validación)
2. Enviar PR con los cambios

### **16. Agregando Jasmine Awesome**

**Descripción**: agregaremos un reporte visual a nuestro proyecto de tal forma que tenga un reporte html de la ejecución de las pruebas

1. Instalar la dependencia de desarrollo **jasmine-awesome-report**
2. Siga las instrucciones de [https://github.com/aperdomob/jasmine-awesome-report](https://github.com/aperdomob/jasmine-awesome-report) (La carpeta debe llamarse reports y el reporte awesome)
3. Modificar el gitignore para que excluya la carpeta del reports
4. Modificar el package.json para que el script del clean borre la carpeta de reports
5. Ejecute las pruebas tanto con interfaz gráfica como en modo headless. Si alguna prueba falla modificarla utilizando css locators o los tiempos hasta que logre funcionar
