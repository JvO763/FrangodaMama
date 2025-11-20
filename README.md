```mermaid
flowchart TD
  %% estilos
  classDef classe fill:#d0ebff,stroke:#1c7ed6,stroke-width:3px,color:#1c1c1c,font-weight:bold
  classDef popup fill:#fff3bf,stroke:#f59f00,stroke-width:2px
  classDef externo fill:#ffd6d6,stroke:#c92a2a,stroke-width:3px,color:#1c1c1c
  classDef util fill:#e6fcf5,stroke:#20c997,stroke-width:2px

  %% Apps / telas (IDs seguros)
  App["📱 App Principal (Framework7)"]
  Link2["🗺️ link2.html — Rotas"]
  Link3["💰 link3.html — Financeiro"]
  Navbar["📎 Toolbar / Navegação"]

  %% link2 nodes (IDs sem espaços)
  BtnCarregar["[btn] Carregar e Agrupar Entregas"]
  carregarPedidos["function carregarPedidos()"]
  agruparEntregas["agruparEntregasMelhorado(entregas)"]
  exibirGrupos["exibirGrupos(grupos)"]
  SortableJS["Sortable.js (drag & drop)"]
  saveGroupsState["saveGroupsState() — POST saveGroups"]
  marcarEntregue["marcarComoEntregueByRows(rows)"]
  gerarLinkMaps["gerarLinkGoogleMaps(grupo)"]
  eventoPedidoAdd["evento_pedido_adicionado"]
  sessionRefresh["session_rotas_refresh_at"]

  %% link3 nodes
  FilterPopup["Popup Filtros (show/hide)"]
  popupAddGasto["Popup: Novo / Editar Gasto"]
  applyFilters["applyFilters()"]
  fetchGastos["fetchGastos(start,end)"]
  fetchPedidosRange["fetchPedidosRange(start,end)"]
  fetchGanhosSum["fetchGanhosSum(start,end)"]
  renderMovimentos["renderMovimentos(gastos, ganhos, pedidos)"]
  addUpdateDeleteGasto["addGasto/updateGasto/deleteGasto"]

  %% Apps Script endpoints (externo) - IDs seguros
  GAS["☁️ Google Apps Script (SCRIPT_URL)"]
  ep_get_pedidos["GET_date_pedidos (doGet)"]
  ep_get_last_groups["GET_getLastGroups"]
  ep_save_groups["POST_saveGroups"]
  ep_update_status["action_updateStatus"]
  ep_update_multiple["action_updateMultipleStatus"]
  ep_get_gastos["GET_getGastos"]
  ep_addupd_del_gasto["POST_addupd_del_gasto"]
  ep_get_pedidos_sum["GET_getPedidosSum"]
  ep_get_pedidos_range["GET_getPedidosRange"]
  ep_add_order["POST_addOrder"]
  ep_update_order["POST_updateOrder"]
  ep_delete_order["action_deleteOrder"]
  ep_login["action_login"]

  %% ligações principais
  App --> Navbar
  Navbar --> Link2
  Navbar --> Link3

  %% link2 interactions (labels sem parênteses nem aspas)
  Link2 --> BtnCarregar
  BtnCarregar --> carregarPedidos
  carregarPedidos -->|fetch_pedidos_date| ep_get_pedidos
  ep_get_pedidos -->|json_pedidos| carregarPedidos
  carregarPedidos --> agruparEntregas
  agruparEntregas --> exibirGrupos
  exibirGrupos --> SortableJS
  SortableJS --> saveGroupsState
  exibirGrupos --> gerarLinkMaps
  exibirGrupos --> marcarEntregue
  marcarEntregue --> ep_update_multiple
  saveGroupsState --> ep_save_groups
  carregarPedidos --> ep_get_last_groups
  ep_get_last_groups --> carregarPedidos

  %% eventos / refresh
  eventoPedidoAdd --> carregarPedidos
  sessionRefresh --> carregarPedidos

  %% link3 interactions
  Link3 --> FilterPopup
  FilterPopup --> applyFilters
  applyFilters --> fetchGastos
  applyFilters --> fetchGanhosSum
  applyFilters --> fetchPedidosRange
  fetchGastos --> ep_get_gastos
  fetchGanhosSum --> ep_get_pedidos_sum
  fetchPedidosRange --> ep_get_pedidos_range
  ep_get_gastos --> fetchGastos
  ep_get_pedidos_sum --> fetchGanhosSum
  ep_get_pedidos_range --> fetchPedidosRange
  applyFilters --> renderMovimentos
  renderMovimentos --> popupAddGasto
  popupAddGasto --> addUpdateDeleteGasto
  addUpdateDeleteGasto --> ep_addupd_del_gasto
  renderMovimentos -->|editar_apagar_gasto| addUpdateDeleteGasto

  %% Apps Script central (externo)
  carregarPedidos --> GAS
  saveGroupsState --> GAS
  marcarEntregue --> GAS
  addUpdateDeleteGasto --> GAS
  fetchGastos --> GAS
  fetchPedidosRange --> GAS
  fetchGanhosSum --> GAS
  ep_add_order --> GAS
  ep_update_order --> GAS
  ep_delete_order --> GAS
  ep_login --> GAS

  %% explicit endpoint links to GAS
  ep_get_pedidos --- GAS
  ep_get_last_groups --- GAS
  ep_save_groups --- GAS
  ep_update_status --- GAS
  ep_update_multiple --- GAS
  ep_get_gastos --- GAS
  ep_addupd_del_gasto --- GAS
  ep_get_pedidos_sum --- GAS
  ep_get_pedidos_range --- GAS
  ep_add_order --- GAS
  ep_update_order --- GAS
  ep_delete_order --- GAS
  ep_login --- GAS

  %% classes visuais
  class App,Link2,Link3,Navbar,carregarPedidos,agruparEntregas,exibirGrupos,renderMovimentos classe
  class popupAddGasto,FilterPopup popup
  class GAS,ep_get_pedidos,ep_save_groups,ep_get_last_groups,ep_update_status,ep_get_gastos externo
  class SortableJS,marcarEntregue,saveGroupsState util
