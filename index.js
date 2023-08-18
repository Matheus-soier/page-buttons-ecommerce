const linkDeCompra = document.getElementById('linkDeCompra');

document.querySelectorAll('input[name="opcao"]').forEach(input => {
  input.addEventListener('click', function () {
    const produtoSelecionado = this.value;
    const link = gerarLinkDeCompra(produtoSelecionado);
    linkDeCompra.href = link;
  });
});

function gerarLinkDeCompra(produto) {
  if (produto === 'produto1') {
    return 'https://payment.newsmileteeth.com/b/6oEg0B0mzdjFg0gfZ7';
  } else if (produto === 'produto2') {
    return 'https://payment.newsmileteeth.com/b/5kAdSt3yL5Rd15maEO';
  } else if (produto === 'produto3') {
    return 'https://payment.newsmileteeth.com/b/14k5lX4CP2F101i3cn';
  }
  return '#';
}