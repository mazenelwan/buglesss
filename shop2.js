const removeBtn = document.createElement('button');
removeBtn.innerHTML = '✖';  // بدل النص استخدم أيقونة
removeBtn.style.background = 'transparent';
removeBtn.style.color = 'red';
removeBtn.style.border = 'none';
removeBtn.style.cursor = 'pointer';
removeBtn.onclick = function() {
    cart.splice(index, 1);
    renderCart();
};
li.appendChild(removeBtn);


