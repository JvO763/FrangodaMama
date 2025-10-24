```mermaid
flowchart TD
    classDef classe fill:#d0ebff,stroke:#1c7ed6,stroke-width:3px,color:#1c1c1c,font-weight:bold
    classDef teste fill:#c3fae8,stroke:#20c997,stroke-width:3px,color:#1c1c1c
    classDef externo fill:#ffd6d6,stroke:#c92a2a,stroke-width:3px,color:#1c1c1c

    App["🖥️ Ana Lima Moda"]
    LoginScreen["🔐 Tela de Login"]
    UserSession["👤 Sessão Usuário"]
    Produtos["📦 Lista de Produtos"]
    AddProdutoPopup["➕ Popup Adicionar Produto"]
    FiltrosPopup["⚙️ Popup Filtros"]
    Searchbar["🔍 Barra de Busca"]
    CameraPopup["📷 Popup Câmera"]
    QuaggaScanner["🤖 Quagga.js"]
    GoogleAppsScript["☁️ Google Apps Script"]

    App -->|verifica login| UserSession
    UserSession -- true --> Produtos
    UserSession -- false --> LoginScreen
    LoginScreen -->|usuário insere login| GoogleAppsScript
    GoogleAppsScript -->|retorna sucesso/falha| UserSession
    UserSession --> App

    Produtos -->|clica Adicionar| AddProdutoPopup
    AddProdutoPopup -->|envia dados| GoogleAppsScript
    GoogleAppsScript --> Produtos

    Produtos -->|clica filtro| FiltrosPopup
    FiltrosPopup -->|aplica filtros| Produtos
    FiltrosPopup -->|limpa filtros| Produtos

    Produtos -->|clica busca| Searchbar
    Searchbar --> Produtos

    AddProdutoPopup -->|clica scan| CameraPopup
    CameraPopup --> QuaggaScanner
    QuaggaScanner -->|código detectado| AddProdutoPopup

    class App,Produtos,AddProdutoPopup,FiltrosPopup,Searchbar,CameraPopup,QuaggaScanner classe
    class LoginScreen teste
    class GoogleAppsScript externo
    class UserSession externo

