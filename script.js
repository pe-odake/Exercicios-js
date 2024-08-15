
function Idade() {
   const idadeInput = document.getElementById('idade').value;
   const idade = parseInt(idadeInput);
   const imagem = document.getElementById('inicial');

   if (idade <= 17) {
      imagem.src = 'asilo.jpg';
      alert("não pode entrar pilantra");


   } else if (idade >= 50) {
      imagem.src = 'asilo.jpg';
      alert("não ta velho demais para entrar?");

   } else if (idade >= 30) {
      imagem.src = 'asilo.jpg';
      alert("vai curti, mas lembra que não é mais jovem");

   } else {
      imagem.src = 'asilo.jpg';
      alert("pode curtir sua vida");

   }
} 
