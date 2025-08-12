const CONFIG = {
  m11948848400", // coloque o seu número com DDI/DDD
  email: "softprimestudio@gmail.com" // troque pelo seu
};

function sendMessageFromForm(form){
  const nome = form.querySelector('input[name=nome]')?.value?.trim() || "";
  const email = form.querySelector('input[name=email]')?.value?.trim() || "";
  const telefone = form.querySelector('input[name=telefone]')?.value?.trim() || "";
  const mensagem = form.querySelector('textarea[name=mensagem]')?.value?.trim() || "";

  const texto = `Olá, sou ${nome}.%0AEmail: ${email}%0ATelefone: ${telefone}%0AProjeto:%0A${mensagem}`;

  // WhatsApp
  const wa = `https://wa.me/${CONFIG.whatsapp}?text=${texto}`;
  window.open(wa, '_blank');

  // fallback e-mail (mailto)
  const subject = encodeURIComponent("Novo projeto — SoftPrime");
  const body = encodeURIComponent(`Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Projeto:
${mensagem}`);
  const mailto = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  document.getElementById('mailtoLink')?.setAttribute('href', mailto);
}

document.addEventListener('submit', function(e){
  const form = e.target;
  if(form.matches('.js-contact')){
    e.preventDefault();
    sendMessageFromForm(form);
  }
}, false);
