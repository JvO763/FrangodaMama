// ===================== PRODUTOS (Pedidos) =====================
async function carregarProdutos() {
  
  try {
    $$('#preloader').show();

    $$('#preloader').hide();
  } catch (e) {
    console.error("Erro ao carregar produtos:", e);
    $$('#preloader').hide();
  }
}

// ===================== REGISTROS (Entradas/Saídas) =====================
async function carregarRegistros() {
  console.log("CARREGANDO REGISTROS...");
  try {
    $$('#preloader').show();

  } catch (e) {
    console.error("Erro ao carregar registros:", e);
    $$('#preloader').hide();
  }
}

// ===================== CLIENTES =====================
async function carregarClientes() {

  try {
  

    $$('#preloader').hide();
  } catch (e) {
    console.error("Erro ao carregar clientes:", e);
    $$('#preloader').hide();
  }
}

// ===================== LOADING SCREEN =====================
function mostrarLoading() {
  document.getElementById('loading-screen').style.display = 'flex';
}

function esconderLoading() {
  document.getElementById('loading-screen').style.display = 'none';
}
